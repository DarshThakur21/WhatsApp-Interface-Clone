import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 
import Chatin from '../Components/Screens/Chatin'
import ChatScreen from '../Components/Screens/ChatScreen'
import MainTabNavigator from './MainTabNavigator'
import Contactscreen from '../Components/Screens/Contactscreen'

const stack=createNativeStackNavigator();
const Navigator = () => {



  return (
    <NavigationContainer>
  
      <stack.Navigator >
        <stack.Screen name='home' component={MainTabNavigator} options={{headerShown:false,headerTitleAlign: 'center'}}/>
        {/* <stack.Screen name='chat' component={ChatScreen} /> */}
        <stack.Screen name='chatting' component={Chatin} options={{headerTitleAlign: 'center'}}/>
        <stack.Screen name='Contacts' component={Contactscreen} options={{headerTitleAlign: 'center'}}/>
      </stack.Navigator>
    
    </NavigationContainer>
  )
}

export default Navigator