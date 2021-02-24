'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number! ';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
 */
let highscore = 0;
//let secretNumber = Math.ceil(Math.random() * 20);
let score = 20;

let generateSecretNumber = function () {
  return Math.ceil(Math.random() * 100);
};

let secretNumber = generateSecretNumber();

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').style.display = 'none';
console.log(`correct number ${secretNumber}`);
document.querySelector('.check').addEventListener('click', function () {
  const inputChar = document.querySelector('.guess').value;
  const guess = Number(inputChar);
  //console.log(inputChar, typeof inputChar);
  //console.log(typeof guess);
  if (inputChar === '') {
    displayMessage('⛔️ No number');
  } else if (guess > 100 || guess <= 0) {
    displayMessage('⛔️ Your number is not between 1 and 100');
  } else if (guess === secretNumber) {
    document.querySelector('.again').style.display = 'block';
    displayMessage('🎉 Correct Number! ');
    //document.querySelector('.message').textContent = '🎉 Correct Number! ';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When quess is too wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guess > secretNumber ? ' 📈 To high! ' : '📈 To low ');
      /*  document.querySelector('.message').textContent =
        gues */
      secretNumber ? ' 📈 To high! ' : '📈 To low ';
    } else {
      displayMessage('💥 You lost the game!');
      //document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = generateSecretNumber();
  //secretNumber = Math.ceil(Math.random() * 20);
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.again').style.display = 'none';

  console.log(`correct number ${secretNumber}`);
});
