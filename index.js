"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const adviceNumber = document.querySelector('#advice-number');
const adviceBody = document.querySelector('#advice-body');
const diceButton = document.querySelector('button');
/* Adding an event listener to the dice button*/
diceButton.addEventListener('click', getNewAdvice);
window.addEventListener('load', getNewAdvice);
/* Declaring a function that will make the API call to request for the advice*/
function getNewAdvice() {
    return __awaiter(this, void 0, void 0, function* () {
        const newAdvicePromise = yield fetch('https://api.adviceslip.com/advice');
        const adviceObject = yield newAdvicePromise.json();
        const actualAdvice = adviceObject.slip.advice;
        const actualAdviceID = adviceObject.slip.id;
        adviceNumber.innerText = actualAdviceID;
        adviceBody.innerText = `"${actualAdvice}"`;
    });
}
