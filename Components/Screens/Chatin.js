import {View, Text, ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import  { useEffect } from 'react';

import { useRoute, useNavigation } from '@react-navigation/native';
import React from 'react'
import bg from '../../assets/BG.png';
import Message from '../Message';
import Inputbox from '../Inputbox';
import messages from '../../assets/messages.json'




const Chatin = () => {

  const route = useRoute();
  const navigation = useNavigation();


  useEffect(() => {
    navigation.setOptions({ title: route.params.name });

  }, [route.params.name]);


  return (
    <KeyboardAvoidingView behavior={Platform.os === 'Android' ? 'padding' : 'height'}
    keyboardVerticalOffset={Platform.os ==='ios'?60 :100}
      style={styles.bg}>
      <ImageBackground source={bg} style={styles.bg}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
          style={styles.list}
          inverted
        />
        <Inputbox />

      </ImageBackground>
    </KeyboardAvoidingView>

  )
}


const styles = StyleSheet.create({
  bg: {
    flex: 1,

  },
  list: {
    padding: 10,
    // marginVertical:10,
  }
});

export default Chatin