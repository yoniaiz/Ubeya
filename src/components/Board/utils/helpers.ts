import { BOARD_SIZE } from "../board.constants";

export const clearBoard = () =>
  Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(-1));

export const isCellEmpty = (cell: number) => cell === -1;

export const isBoardFull = (newBoard: number[][]) =>
  newBoard.flat().every((cell) => cell > -1);
