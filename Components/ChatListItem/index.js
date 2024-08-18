import react from "react";
// https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'
import { Text, View, Image, StyleSheet,Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);







const ChatListItem = ({ chat }) => {
    const navigation =useNavigation();

    return (
        <Pressable 
            onPress={()=>navigation.navigate('chatting',{id:chat.id,name:chat.user.name})}
        style={styles.container}>
            <Image source={{ uri: chat.user.image }}
                style={styles.image}
            />
            <View style={styles.content}>
                <View style={styles.row}>
                    <Text numberOfLines={1} style={styles.name}>{chat.user.name}</Text>
                    <Text style={styles.subtitle}>{dayjs(chat.lastMessage.createdAt).fromNow(  )}</Text>
                </View>
                <Text numberOfLines={2} style={styles.subtitle}>{chat.lastMessage.text} </Text>
            </View>

        </Pressable>
    )
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        height: 70,
    },


    image: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    content: {
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'lightgray',



    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,

    },
    name: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',

    },

    subtitle: {
        color: 'gray',

    },
})

export default ChatListItem;