//Dom elements Setting inner HTML to replace text
document.getElementById('guessText').innerHTML = "You cannot be serious! Fine just sit here and wait..."
document.getElementById('guessText').innerHTML = "Too High"
score--;
document.getElementById('scoreLabel').innerHTML = score
document.body.style.backgroundColor = "yellow"; // Affect the background color of the body


/* EVENT LISTENER , CLICK, querySelector class
//Awesome way to add a click functionality to a button instead of attaching the oncclick in the HTML
document.querySelector('.again').addEventListener('click', function () { //grabs the again class
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

//DOM NOTES
/*
Dom is created by HTML document when it is created
It is in a tree structure
*/
//Select and manipulate on screen element with class of message
document.querySelector('.message').textContent = 'THANK YOU'
//You can set the value of a query in js
document.querySelector('.guess').value = 23;

document.querySelector('.check').addEventListener

document.querySelector('.check').addEventListener
('click', function () {
    const guess = document.querySelector('.guess').value; //Grab the input value
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number'; //Affect the text content in the HTML
    }
});
