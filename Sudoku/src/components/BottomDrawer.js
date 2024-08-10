import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native'; 
import { GameContext } from '../context/GameContext';
import { solveSudoku } from '../utils/sudokuUtils'; 

const BottomDrawer = () => {
  const { board } = useContext(GameContext);

  const handleHint = () => {
    
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === null) {
          const solvedBoard = solveSudoku([...board]);
          if (solvedBoard) {
            Alert.alert('Hint', `Try placing ${solvedBoard[row][col]} in row ${row + 1}, column ${col + 1}`);
          }
          return;
        }
      }
    }
  };

  return (
    <View style={styles.drawer}>
      <Button title="Get Hint" onPress={handleHint} />
    </View>
  );
};

const styles = StyleSheet.create({
  drawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
});

export default BottomDrawer;
