import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const Screen_B = ({ navigation }) => {
    const onPressHandle = () => {
        // navigator.goBack();
        navigation.navigate('Screen_A');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Screen_B</Text>
            <Pressable style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#3ac' })}
                onPress={onPressHandle}>
                <Text style={styles.text}> Go to Screen_A</Text>
            </Pressable>
        </View>
    )
}
export default Screen_B
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