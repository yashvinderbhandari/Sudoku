import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GameProvider } from './src/context/GameContext';
import HomeScreen from './src/screens/HomeScreen'; 
import GameScreen from './src/screens/GameScreen'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <GameProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Sudoku Home' }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{ title: 'Sudoku Game' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GameProvider>
  );
};

export default App;
