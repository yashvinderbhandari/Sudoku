import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { GameContext } from '../context/GameContext'; 
import { validateSudoku, solveSudoku } from '../utils/sudokuUtils';
import BottomDrawer from '../components/BottomDrawer'; 

const GameScreen = () => {
  const { board, setBoard } = useContext(GameContext);
  const [solved, setSolved] = useState(false);

  const handleInputChange = (value, rowIndex, colIndex) => {
    const newBoard = board.map((row, rIndex) =>
      row.map((cell, cIndex) =>
        rIndex === rowIndex && cIndex === colIndex ? value : cell
      )
    );
    setBoard(newBoard);
  };

  const handleValidate = () => {
    if (validateSudoku(board)) {
      Alert.alert('Validation', 'The current state is valid!');
    } else {
      Alert.alert('Validation Error', 'There are conflicts in the Sudoku!');
    }
  };

  const handleSolve = () => {
    if (validateSudoku(board)) {
      const solution = solveSudoku(board);
      if (solution) {
        setBoard(solution);
        setSolved(true);
      } else {
        Alert.alert('Solve Error', 'This Sudoku puzzle is unsolvable.');
      }
    } else {
      Alert.alert('Validation Error', 'Fix the conflicts before solving!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sudoku Game</Text>
      <View style={styles.board}>
        {board.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((cell, colIndex) => (
              <TextInput
                key={colIndex}
                style={styles.cell}
                value={cell ? cell.toString() : ''}
                keyboardType="numeric"
                maxLength={1}
                onChangeText={(value) =>
                  handleInputChange(value ? parseInt(value) : null, rowIndex, colIndex)
                }
              />
            ))}
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Validate" onPress={handleValidate} />
        <Button title="Solve" onPress={handleSolve} />
      </View>
      {solved ? <Text style={styles.solvedText}>Sudoku Solved!</Text> : null}
      <BottomDrawer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'blue', 
  },
  board: {
    width: 300,
    height: 300,
    borderColor: '#000',
    borderWidth: 2,
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 33,
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    color: 'red', 
    fontSize: 12, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  solvedText: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
  },
});

export default GameScreen;
