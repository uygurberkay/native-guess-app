import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const GuessLogItem = ({roundNumber, guess}: any)=> {
    return (
        <View style={styles.listItem}>
            <Text style={{fontWeight: '400'}}>#{roundNumber}</Text>
            <Text style={{fontWeight: '400'}}>Opponent's Guess: {guess}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4, // ANDROID
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: .25,
        shadowRadius: 3, // IOS
    }
})

export default GuessLogItem