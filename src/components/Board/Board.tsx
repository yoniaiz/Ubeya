import React from "react";
import Cell from "./components/Cell/Cell";
import "./style.css";
import { useTicTacToe } from "./hooks/useTicTacToe";

const Board = () => {
  const { board, handleCellClick } = useTicTacToe();

  return (
    <div className="board">
      {board.map((row, i) =>
        row.map((cell, j) => (
          <Cell
            key={`${i}_${j}`}
            cellVal={cell}
            onCellClick={() => handleCellClick([i, j])}
          />
        ))
      )}
    </div>
  );
};

export default Board;
