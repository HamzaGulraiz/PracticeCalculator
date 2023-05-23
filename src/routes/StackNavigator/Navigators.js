import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../../screens/MainScreen';

import {MAIN_SCREEN} from '../../constants/Navigator';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAIN_SCREEN} component={MainScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
