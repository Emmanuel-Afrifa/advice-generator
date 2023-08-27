const adviceNumber = document.querySelector('#advice-number') as HTMLSpanElement;
const adviceBody = document.querySelector('#advice-body') as HTMLParagraphElement;
const diceButton = document.querySelector('button') as HTMLButtonElement;

/* Adding an event listener to the dice button*/
diceButton.addEventListener('click', getNewAdvice);

window.addEventListener('load', getNewAdvice);

/* Declaring a function that will make the API call to request for the advice*/
async function getNewAdvice(){
    const newAdvicePromise = await fetch('https://api.adviceslip.com/advice');
    const adviceObject = await newAdvicePromise.json()
    const actualAdvice = adviceObject.slip.advice;
    const actualAdviceID = adviceObject.slip.id;

    adviceNumber.innerText = actualAdviceID;
    adviceBody.innerText = `"${actualAdvice}"`;
}