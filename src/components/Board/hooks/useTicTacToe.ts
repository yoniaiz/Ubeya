import { useState } from "react";
import { clearBoard, isBoardFull, isCellEmpty } from "../utils/helpers";
import { isGameCompeted } from "../utils/isGameCompeted";

export const useTicTacToe = () => {
  const [isFirstUserTurn, setIsFirstUserTurn] = useState(true);

  const [board, setBoard] = useState(clearBoard());

  const resetGame = (alertMsg: string) => {
    setTimeout(() => {
      alert(alertMsg);
      setIsFirstUserTurn(true);
      setBoard(clearBoard());
    }, 200);
  };

  const handleCellClick = ([x, y]: [number, number]) => {
    if (isCellEmpty(board[x][y])) {
      const userNum = Number(isFirstUserTurn);
      const newBoard = [...board];

      newBoard[x][y] = userNum;
      setBoard(newBoard);

      if (isGameCompeted(newBoard, userNum)) {
        resetGame(`Player ${userNum + 1} Wins!`);
      } else if (isBoardFull(newBoard)) {
        resetGame("Its A Tie!");
      } else {
        setIsFirstUserTurn((prevState) => !prevState);
      }
    }
  };

  return {
    board,
    handleCellClick,
  };
};
