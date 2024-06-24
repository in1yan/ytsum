import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {enableScreens} from 'react-native-screens'
import Summary from './screens/summary.js';
import Home from './screens/home.js';

enableScreens();
const Stack = createNativeStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Summary'
          component={Summary}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App;