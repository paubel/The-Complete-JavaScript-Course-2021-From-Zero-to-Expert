'use strict';

const btnRock = document.querySelector('.rock');
const btnScissors = document.querySelector('.scissors');
const btnPaper = document.querySelector('.paper');
const btnRestart = document.querySelector('.restart');
const infoText = document.querySelector('#infotext');

const scorePlayerEl = document.querySelector('#score--0');
const scoreComputerEl = document.querySelector('#score--1');

const choicePlayerEl = document.querySelector('.symbol--0');
const choiceComputerEl = document.querySelector('.symbol--1');

let choicePLayer;
let scores = [0, 0];

const init = function () {
  //init
  scores[(0, 0)];
  scorePlayerEl.textContent = 0;
  scoreComputerEl.textContent = 0;
  infoText.textContent = 'Choose!';
};

const symbolButtonClick = function () {
  //Comp choice
  choicePLayer = Number(this.id);

  let choiceComputer = Math.floor(Math.random() * 3);
  choiceComputerEl.src = `symbol-${choiceComputer}.png`;
  choicePlayerEl.src = `symbol-${choicePLayer}.png`;

  if (choicePLayer === choiceComputer) {
    infoText.textContent = 'Same!';
  } else if (choicePLayer === 0 && choiceComputer === 1) {
    scores[0]++;
    infoText.textContent = 'Player wins!';
  } else if (choicePLayer === 1 && choiceComputer === 2) {
    scores[0]++;
    infoText.textContent = 'Player wins!';
  } else if (choicePLayer === 2 && choiceComputer === 0) {
    scores[0]++;
    infoText.textContent = 'Player wins!';
  } else if (choicePLayer === 1 && choiceComputer === 0) {
    scores[1]++;
    infoText.textContent = 'Computer wins!';
  } else if (choicePLayer === 2 && choiceComputer === 1) {
    scores[1]++;
    infoText.textContent = 'Computer wins!';
  } else if (choicePLayer === 0 && choiceComputer === 2) {
    scores[1]++;
    infoText.textContent = 'Computer wins!';
  }
  scorePlayerEl.textContent = scores[0];
  scoreComputerEl.textContent = scores[1];
};

btnRock.addEventListener('click', symbolButtonClick);

btnScissors.addEventListener('click', symbolButtonClick);

btnPaper.addEventListener('click', symbolButtonClick);

btnRestart.addEventListener('click', init);
