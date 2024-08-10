import React, { createContext, useState } from 'react';


export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [board, setBoard] = useState(
    Array(9)
      .fill(null)
      .map(() => Array(9).fill(null)) 
  );
  const [difficulty, setDifficulty] = useState('easy');

  return (
    <GameContext.Provider value={{ board, setBoard, difficulty, setDifficulty }}>
      {children}
    </GameContext.Provider>
  );
};
