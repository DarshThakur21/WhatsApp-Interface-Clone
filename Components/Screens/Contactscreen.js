import { View, Text,FlatList,  StyleSheet } from 'react-native'
import React from 'react'
import chats from  '../../assets/chats.json';
import ContactListItem from '../ContactListItem';

const Contactscreen = () => {
  return (
    <FlatList 
            data={chats}
            renderItem={({item})=><ContactListItem chat={item.user}
            style={{backgroundColo:"white"}}/>}
             
        />
  )
}

export default Contactscreen;