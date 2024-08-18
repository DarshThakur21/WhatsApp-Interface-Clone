import { View, Text,FlatList } from 'react-native'
 import chats from  '../../assets/chats.json';
import ChatListItem from '../ChatListItem';
 
 

const ChatScreen = () => {
  return (
        <FlatList 
            data={chats}
            renderItem={({item})=><ChatListItem chat={item}/>}
             
        />

  );
};

export default ChatScreen