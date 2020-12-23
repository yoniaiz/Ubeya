import { BOARD_SIZE } from "../board.constants";

export const isGameCompeted = (newBoard: number[][], firstUserNum: number) => {
  const isRowFiled = () => {
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (newBoard[i].every((cell) => cell === firstUserNum)) {
        return true;
      }
    }

    return false;
  };

  const isCellField = () => {
    for (let i = 0; i < BOARD_SIZE; i++) {
      let isEqual = true;

      for (let j = 0; j < BOARD_SIZE; j++) {
        isEqual = newBoard[j][i] === firstUserNum;
        if (!isEqual) {
          break;
        }
      }
      if (isEqual) {
        return isEqual;
      }
    }

    return false;
  };

  const isDiagonalField = () => {
    let isEqual = true;
    for (let i = 0; i < BOARD_SIZE; i++) {
      isEqual = newBoard[i][i] === firstUserNum;
      if (!isEqual) {
        break;
      }
    }
    if (isEqual) return isEqual;

    for (let i = newBoard.length - 1; i >= 0; i--) {
      isEqual = newBoard[newBoard.length - i - 1][i] === firstUserNum;
      if (!isEqual) {
        break;
      }
    }

    return isEqual;
  };

  return isDiagonalField() || isCellField() || isRowFiled();
};
