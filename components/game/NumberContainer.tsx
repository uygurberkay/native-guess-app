import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const NumberContainer = ({children}: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}
const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 450 ? 8 : 12,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '50%',
    },
    numberText: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold',
    },
})


export default NumberContainer