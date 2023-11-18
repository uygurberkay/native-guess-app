import { Text, StyleSheet } from 'react-native'
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
        borderWidth: 2,
        borderColor: 'white',
        padding: 8,
    }
});

export default Title