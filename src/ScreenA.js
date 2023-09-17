import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const Screen_A = ({ navigation }) => {
    const onPressHandle = () => {
        navigation.navigate('Screen_B');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen_A</Text>
            <Pressable
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#3ac', borderRadius: 10, padding: 5 })}
                onPress={onPressHandle}>
                <Text style={styles.text}>Go to Screen_B</Text>
            </Pressable>
        </View>
    )
}

export default Screen_A;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 26,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 20,
    }

})