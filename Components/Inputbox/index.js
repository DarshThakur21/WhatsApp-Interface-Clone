import { TextInput, View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useState } from 'react';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const Inputbox = () => {
    const [newMessage,setnewMessage]=useState('');
    const onSend=()=>{
        console.warn('new msg',newMessage);
        setnewMessage('');
        
    };


    return (
        <SafeAreaView edges={'bottom'} style={styles.container}>
            {/* Icons */}
            <AntDesign name='plus' size={20} color={'royalblue'} />
            {/* textinput */}
            <TextInput
                value={newMessage} 
                onChangeText={setnewMessage}
                style={styles.input}
                placeholder='type your message' />

            {/* icons */}
            <MaterialIcons  onPress={onSend} style={styles.send} name='send' size={17} color={'white'} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create(
    {
        container:{
            flexDirection:'row',
            backgroundColor:'whitesmoke',
            padding:5,
            paddingHorizontal:10,
            alignItems:'center',
        },
        input:{
            fontSize:16,
            flex:1,
            backgroundColor:"white",
            marginHorizontal:9,
            padding:5,
            paddingHorizontal:10,
            borderRadius:16,
            borderColor:'lightgray',
            borderWidth:StyleSheet.hairlineWidth,

        },
        send:{
            backgroundColor:'royalblue',
            padding:7,
            borderRadius:9,
            overflow:'hidden',


        }

    } 


)

export default Inputbox;