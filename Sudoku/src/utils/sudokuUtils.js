
const isValid = (board, row, col, value) => {
  
  if (value === null) return true;
  for (let i = 0; i < 9; i++) {
      if (board[row][i] === value && i !== col) return false;
  }

  for (let i = 0; i < 9; i++) {
      if (board[i][col] === value && i !== row) return false;
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
          if (board[i][j] === value && (i !== row || j !== col)) return false;
      }
  }

  return true;
};

export const validateSudoku = (board) => {
  for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
          const value = board[row][col];
          if (value !== null && !isValid(board, row, col, value)) {
              return false;
          }
      }
  }
  return true;
};

// Solve the Sudoku using backtracking
export const solveSudoku = (board) => {
  const findEmptyCell = () => {
      for (let row = 0; row < 9; row++) {
          for (let col = 0; col < 9; col++) {
              if (board[row][col] === null) return { row, col };
          }
      }
      return null;
  };

  const solve = () => {
      const emptyCell = findEmptyCell();
      if (!emptyCell) return true; 

      const { row, col } = emptyCell;
      for (let value = 1; value <= 9; value++) {
          if (isValid(board, row, col, value)) {
              board[row][col] = value;
              if (solve()) return true;
              board[row][col] = null; 
          }
      }
      return false; 
  };

  if (solve()) return board;
  return null; 
};
