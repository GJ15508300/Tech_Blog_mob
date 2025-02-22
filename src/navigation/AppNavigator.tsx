import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home';

export type RootStackParamList = {
    Login: undefined;  // Login screen does not take any parameters
    Home: undefined;   // Home screen does not take any parameters
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};
export default AppNavigator;
