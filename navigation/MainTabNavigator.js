


import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import React from 'react'
import Chatin from '../Components/Screens/Chatin';
import ChatScreen from '../Components/Screens/ChatScreen';
import Notimplement from '../Components/Screens/Notimplement';
import { Ionicons, Entypo } from '@expo/vector-icons';

// import NotImplementedScreen from '../Components/NotImplementedScreen';


const btab = createBottomTabNavigator();
const MainTabNavigator = () => {

    return (
        <btab.Navigator initialRouteName='chat'
            screenOptions={{
                tabBarBadgeStyle: { backgroundColor: 'whitesmoke' },
                headerStyle: { backgroundColor: 'whitesmoke' },
                headerTitleAlign: 'center'
            }}>
            < btab.Screen name='status' component={Notimplement}
                options={{ tabBarIcon: (color, size) => (<Ionicons name='logo-whatsapp' size={24} color={color} />), }} />
            <btab.Screen name='calls' component={Notimplement}
                options={{ tabBarIcon: (color, size) => (<Ionicons name='call-outline' size={24} color={color} />), }} />





            {/* <btab.Screen name='chat' component={ChatScreen}
                options={({ navigation }) => {
                    tabBarIcon: (color, size) => (<Ionicons name='chatbubble-outline' size={24} color={color} />),
                        headerRight: () =>
            <Entypo
                onPress={() => navigation.navigate('Contacts')} name='new-message' size={18} color={'royalblue'} style={{ marginRight: 10, }} />
                }} /> */}

            <btab.Screen
                name='chat'
                component={ChatScreen}
                options={({ navigation }) => ({
                    tabBarIcon: (color, size) => <Ionicons name='chatbubble-outline' size={24} color={color} />,
                    headerRight: () => (
                        <Entypo
                            onPress={() => navigation.navigate('Contacts')}
                            name='new-message'
                            size={18}
                            color={'royalblue'}
                            style={{ marginRight: 10 }}
                        />
                    ),
                })}
            />







            <btab.Screen name='camera' component={Notimplement}
                options={{ tabBarIcon: (color, size) => (<Ionicons name='camera-outline' size={24} color={color} />), }} />
            <btab.Screen name='settings' component={Notimplement}
                options={{ tabBarIcon: (color, size) => (<Ionicons name='settings-outline' size={24} color={color} />), }} />


        </btab.Navigator>
    )
}

export default MainTabNavigator