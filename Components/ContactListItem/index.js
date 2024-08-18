import react from "react";
// https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg'
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);







const ContactListItem = ({ user }) => {
    const navigation = useNavigation();

    return (
        <Pressable
            // onPress={() =>}
            style={styles.container}>``
            <Image source={{ uri: user.image }}
                style={styles.image}
            />

            <Text numberOfLines={1} style={styles.name}>{user.name}</Text>




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

    
})

export default ContactListItem;