import { Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

const Title = ({children}: any) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        borderWidth: Platform.select({ios: 0, android: 2}),
        borderColor: 'white',
        padding: 8,
        maxWidth: '80%',
    }
});

export default Title