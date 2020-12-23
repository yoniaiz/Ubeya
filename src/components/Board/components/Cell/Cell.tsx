import React from "react";
import "./style.css";

interface Props {
  cellVal: number;
  onCellClick: () => void;
}

const Cell = ({ cellVal, onCellClick }: Props) => {
  const getCellVal = () => {
    if (cellVal === 1) {
      return "x";
    }
    if (cellVal === 0) {
      return "o";
    }

    return null;
  };

  return (
    <button onClick={onCellClick} className="cell">
      {getCellVal()}
    </button>
  );
};

export default Cell;
