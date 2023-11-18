import { Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const InstructionText = ({children, customStyle}: any) => {
    return (
        <Text style={[styles.instructionText, customStyle]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
    },
})

export default InstructionText