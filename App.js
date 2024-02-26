// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './LandingScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import HomeScreen from './HomeScreen';
import AddTodoScreen from './AddTodoScreen';
const Stack = createStackNavigator();
import EditTodoScreen from './EditTodoScreen';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AddTodo" component={AddTodoScreen} />
        <Stack.Screen name="EditTodo" component={EditTodoScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
