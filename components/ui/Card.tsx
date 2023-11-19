import { View, Text, StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({children}: any) => {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth <389 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary700,
        borderRadius: 8,
        elevation: 4, // For Android only 
        /* For IOS only */
        shadowColor: 'black', 
        shadowOffset: {width: 0, height:2},
        shadowRadius: 6, 
        shadowOpacity: .2,
        /***************/
    },
})

export default Card