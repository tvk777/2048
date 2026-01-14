'use strict';
/* eslint no-console: ["error", { allow: ["warn", "log"] }] */

const { KEY_CODES, GAME_STATUS } = require('../constants/constants');
const Game = require('../modules/Game.class');
const game = new Game();
const startButton = document.querySelector('.start');

startButton.addEventListener('click', (e) => {
  if (startButton.classList.contains('start')) {
    game.start();
  }

  if (startButton.classList.contains('restart')) {
    game.restart();
  }

  startButton.classList.remove('start');
  startButton.classList.add('restart');
  startButton.textContent = 'Restart';
});

document.addEventListener('keydown', (e) => {
  const currentStatus = game.getStatus();

  if (currentStatus !== GAME_STATUS.PLAYING) {
    return;
  }

  switch (e.key) {
    case KEY_CODES.LEFT:
      game.moveLeft();
      break;
    case KEY_CODES.RIGHT:
      game.moveRight();
      break;
    case KEY_CODES.UP:
      game.moveUp();
      break;
    case KEY_CODES.DOWN:
      game.moveDown();
      break;
  }
  game.updateMessage();
});
