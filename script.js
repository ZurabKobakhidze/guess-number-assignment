const numberResult = document.querySelector(".number");
const guessNumber = document.querySelector(".guess");
const checkButton = document.querySelector("#check-button");
const againButton = document.querySelector("#again-button");
const startGuessing = document.querySelector(".message");
const scoreResult = document.querySelector(".score");
const scoreHighest = document.querySelector(".highscore");


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

guessNumber.addEventListener("input" , () =>{
    if (guessNumber.value > 100) {
        guessButton = 100 ;
        guessNumber.value = "100";
    }

    if (guessNumber.value < 0) {
        guessButton = 0;
        guessNumber.value = "0";
    }

    const guess = parseFloat(guessNumber.value);
    if (isNaN(guess)) {
      const falseResult = document.createElement("span");
      falseResult.classList.add("message");
      falseResult.textContent = "⛔ No number!";
      startGuessing.textContent = "⛔ No number!";
    }

});

checkButton.addEventListener("click", () => {
    guessGame ();
})


let numTries = 0;
let highscore = null;




numberResult.addEventListener("change",guessGame);

function guessGame () {

    numTries++;

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

        if (highscore === null || numTries < highscore) {
            highscore = numTries; 
            scoreHighest.textContent = highscore; 
          }
      
        
    }

  

    let guessButton = parseFloat(guessNumber.value);

    
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
    numTries = 0 ;




    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);

   

}