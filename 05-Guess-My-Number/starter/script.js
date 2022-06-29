'use strict';
let number = 0;
let score = 20;
let hiScore = 0;
let win = false;

function decideNumber() {
    number = Math.floor((Math.random() * 100) + 1)
    document.getElementById('guessText').innerHTML = "Start guessing..."
    console.log(number);
    score = 20;
    document.getElementById('scoreLabel').innerHTML = score;
}

function checkGuess() {
    if (win) {
        document.getElementById('guessText').innerHTML = "I said press the again BUTTON!"
    }
    let guess = document.getElementById('guessNumber').value;
    if (guess == number) {
        document.getElementById('guessText').innerHTML = "You Win! Press The Again Button In The Top left corner!"
        win = true;
        if (score > hiScore) hiScore = score;

    }
    else if (guess < number) {
        document.getElementById('guessText').innerHTML = "Too Low"
        score--;
        document.getElementById('scoreLabel').innerHTML = score
    }
    else {
        document.getElementById('guessText').innerHTML = "Too High"
    }


}
