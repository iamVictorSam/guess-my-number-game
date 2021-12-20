'use strict';

// Here we initialize the random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = secretNumber =>
  (document.querySelector('.number').textContent = secretNumber);

const displayScore = function (number) {
  document.querySelector('.score').textContent = number;
};

const secretNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const bgColor = function(color) {
    document.querySelector('body').style.backgroundColor = color;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //   when theres is no input
  if (!guess) {
    displayMessage('No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct... You are as brilliant as VictorSam!');
    displaySecretNumber(secretNumber);

    if (score > highScore) {
      highScore = score;

      document.querySelector('.highscore').textContent = highScore;
    }

    //   how to manipulate css
   bgColor('#60b347');
    secretNumberWidth('30rem');
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   when guess is greater than secret number
      displayMessage(
        guess > secretNumber
          ? 'Too high !!'
          : 'Too low!!'
      );

      score--;
      displayScore(score);
    } else {
      displayMessage(
        'You lost the game! i just weak for your... Na your village people sha'
      );
      displayScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  let score = 20;

  displaySecretNumber('?');

  displayMessage('Start guessing...');

  displayScore(score);
  secretNumberWidth('15rem');
bgColor('#222');
 

  document.querySelector('.guess').value = '';
});
