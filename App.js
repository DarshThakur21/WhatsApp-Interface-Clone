import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem from './Components/ChatListItem';
import ChatScreen from './Components/Screens/ChatScreen';
import Chatin from './Components/Screens/Chatin';
import Navigator from './navigation';


 



// {/* <ChatScreen/>  */}
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Chatin/>   */}
      <Navigator/>
        
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingVertical:50,  
    justifyContent: 'center',
  },
});
