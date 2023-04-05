const numberResult = document.querySelector(".number");
const guessNumber = document.querySelector(".guess");
const checkButton = document.querySelector("#check-button");
const againButton = document.querySelector("#again-button");
const startGuessing = document.querySelector(".message");



guessNumber.addEventListener("input", function (){
    guessGame();
});

function guessGame () {

    let guessButton = parseFloat(guessNumber.value);

    if (guessNumber.value > 100) {
        guessButton = 100 ;
        guessNumber.value = "100";
    }
}

// let guessButton = parseFloat(guessNumber.value);
//         if (guessButton > 100) {
//             guessButton = 100 ;
//             guessNumber.value = "100";
//         }