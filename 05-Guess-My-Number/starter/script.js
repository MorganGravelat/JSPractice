'use strict';
let number = 0;
let score = 20;
let hiScore = 0;
let win = 0;

function decideNumber() {
    number = Math.trunc(Math.random() * 20) + 1;
    document.getElementById('guessText').innerHTML = "Start guessing..."
    console.log(number);
    score = 20;
    document.getElementById('scoreLabel').innerHTML = score;
}

function checkGuess() {
    console.log(win);
    if (win) {
        console.log('this is happening')
        if (win > 1) {
            document.getElementById('guessText').innerHTML = "You cannot be serious! Fine just sit here and wait..."
        } else {
            document.getElementById('guessText').innerHTML = "I said press the again BUTTON!"
        }
        win++;
    }
    let guess = document.getElementById('guessNumber').value;
    if (Number(guess) === number && !win) {
        document.getElementById('guessText').innerHTML = "You Win! Press The Again Button In The Top left corner!"
        win = true;
        if (score > hiScore) hiScore = score;

    }
    else if (guess > 20 || guess < 1) {
        document.getElementById('guessText').innerHTML = "The number must be between 1 and 20"
    }
    else if (guess < number) {
        document.getElementById('guessText').innerHTML = "Too Low"
        score--;
        document.getElementById('scoreLabel').innerHTML = score
    }
    else if (guess > number) {
        document.getElementById('guessText').innerHTML = "Too High"
    }


}
