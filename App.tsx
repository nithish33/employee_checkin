import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Imported My Pages 
import Login from './Screens/Login';
import Home from './Screens/Home';
import CheckinScreen from './Screens/CheckinScreen'
// Add Navigator
const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='CheckinScreen' component={CheckinScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

