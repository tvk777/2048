'use strict';

const BOARD_SIZE = 4;
const EMPTY_CELL = 0;

const NEW_TILE_VALUES = {
  TWO: 2,
  FOUR: 4,
};

const PROBABILITY_TWO = 0.9;

const WIN_TILE = 2048;

const GAME_STATUS = {
  IDLE: 'idle',
  PLAYING: 'playing',
  WIN: 'win',
  LOSE: 'lose',
};

const KEY_CODES = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
};

module.exports = {
  BOARD_SIZE,
  EMPTY_CELL,
  NEW_TILE_VALUES,
  PROBABILITY_TWO,
  WIN_TILE,
  GAME_STATUS,
  KEY_CODES,
};
