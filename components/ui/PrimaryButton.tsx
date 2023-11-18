import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

interface ButtonProps {
    children: any,
    onPress: any,
}

const PrimaryButton = ({children, onPress}: ButtonProps) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={
                    ({pressed}) => pressed 
                    ? [styles.pressed, styles.buttonInnerContainer] 
                    : styles.buttonInnerContainer}  // android_ripple for IOS
                onPress={onPress} 
                android_ripple={{color: Colors.primary600}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // Works on Android
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {
        opacity: .75,
    }
})

export default PrimaryButton