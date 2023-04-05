const numberResult = document.querySelector(".number");
const guessNumber = document.querySelector(".guess");
const checkButton = document.querySelector("#check-button");
const againButton = document.querySelector("#again-button");
const startGuessing = document.querySelector(".message");
const scoreResult = document.querySelector(".score");
const scoreHighest = document.querySelector(".highscore");


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


checkButton.addEventListener("click", () => {
    guessGame ();
    numTries++;
})

let numTries = 1 ;
let highScore = localStorage.getItem("highScore") || Infinity;

numberResult.addEventListener("change",guessGame);

function guessGame () {

    if (+guessNumber.value > randomNumber) {
        const tooHightAnswer = document.createElement("span");
        tooHightAnswer.classList.add("message");
        tooHightAnswer.textContent = "📈 Too high!";
        startGuessing.textContent = "📈 Too high!";
    }

    if (+guessNumber.value < randomNumber) {
        const tooLowAnswer = document.createElement("span");
        tooLowAnswer.classList.add("message");
        tooLowAnswer.textContent = "📉 Too low!";
        startGuessing.textContent = "📉 Too low!";
    }

    if (+guessNumber.value === randomNumber) {
        const correctNumber = document.createElement("div");
        correctNumber.classList.add("number");
        correctNumber.textContent = randomNumber;
        numberResult.textContent = randomNumber;
        document.body.style.backgroundColor = "#60b347";
        const rightAnswer = document.createElement("span");
        rightAnswer.classList.add("message");
        rightAnswer.textContent = "🎉 Correct number!";
        startGuessing.textContent = "🎉 Correct number!";
        scoreResult.textContent = numTries;
        scoreHighest.textContent =  highScore;

        if (numTries < highScore) {
            localStorage.setItem("highScore", numTries);
            scoreHighest.textContent = numTries;
            highScore = numTries;
          }
    }

    let guessButton = parseFloat(guessNumber.value);

    if (guessNumber.value > 100) {
        guessButton = 100 ;
        guessNumber.value = "100";
    }
}

againButton.addEventListener("click", () => {
    resetGame ();
    
})

function resetGame (){

    guessNumber.value ="";
    document.body.style.backgroundColor = "#222"; 
    numberResult.textContent = "?";
    startGuessing.textContent = "Start guessing...";
    scoreResult.textContent = "0";
    numTries = 1 ;




    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

}