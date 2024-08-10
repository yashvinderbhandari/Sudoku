import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GameContext } from '../context/GameContext';

const HomeScreen = ({ navigation }) => {
  const { difficulty, setDifficulty } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sudoku!</Text>
      <Text style={styles.subtitle}>Difficulty: {difficulty}</Text>
      <Button title="Start Game" onPress={() => navigation.navigate('Game')} />
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
    color : '#3498db',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
    color: '#2ecc71',
  },
});

export default HomeScreen;
