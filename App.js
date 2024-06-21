import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image} from 'react-native';
import { useFonts } from 'expo-font';

import Summary from './screens/summary.js';
import Home from './screens/home.js';

const Stack = createNativeStackNavigator();

const App=()=>{
  const [fontsLoaded, fontError] = useFonts({
    'SourceCodePro': require('./assets/fonts/SourceCodePro.ttf'),
  });
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
          options={{headerShown:true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
const Logo=()=>{
  return(
      <Image style={{height:100,width:100,alignSelf:'center'}} source={require('./assets/home-logo.png')}/>
      );
}
export default App;