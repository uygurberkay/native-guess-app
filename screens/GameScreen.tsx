import { View, Text, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'

import { MaterialCommunityIcons, Foundation  } from '@expo/vector-icons'; 

/* Components */
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Colors from '../constants/colors';
import GuessLogItem from '../components/game/GuessLogItem';

interface PropsTypes {
    min: number,
    max: number,
    exclude?: number,
}

const generateRandomBetween = ({ min, max, exclude }: PropsTypes): any => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween({ min, max, exclude });
    } else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;


const GameScreen = ({userNumber, onGameOver}: any) => {
    const initialGuess = generateRandomBetween({ min: 1, max: 100, exclude: userNumber });
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const {width, height} = useWindowDimensions();
    console.log(width,height)

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        let minBoundary = 1;
        let maxBoundary = 100;
    }, [])

    const nextGuessHandler = (direction: string) => { 
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }
        if(direction === 'lower') {
            maxBoundary = currentGuess - 1;
        }else {
            minBoundary = currentGuess + 1;
        }
        console.log(maxBoundary,minBoundary,currentGuess)
        const newRndNumber = generateRandomBetween({min :minBoundary, max: maxBoundary, exclude: currentGuess})
        setCurrentGuess(newRndNumber)
        setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundsListLenght = guessRounds.length;

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            {/* GUESS */}
            <Card>
                <InstructionText customStyle={{marginBottom: 12}}>Higher or lover?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Foundation name="minus-circle" size={24} color={Colors.accent500} />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <MaterialCommunityIcons name="plus-circle-outline" size={24} color={Colors.accent500} />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
        </>
    )

    if (width > 400 ){
        content = (
            <>
                <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Foundation name="minus-circle" size={24} color={Colors.accent500} />
                        </PrimaryButton>
                    </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <MaterialCommunityIcons name="plus-circle-outline" size={24} color={Colors.accent500} />
                        </PrimaryButton>
                    </View>
                </View>
            </>
        )
    }

    return (  
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                <FlatList 
                    data={guessRounds}
                    renderItem={(itemData) => (
                        <GuessLogItem 
                        roundNumber={guessRoundsListLenght - itemData.index} 
                        guess={itemData.item}
                        >
                            {itemData.item}
                        </GuessLogItem>)}
                    keyExtractor={(guessRounds) => guessRounds}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        padding: 24,
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    instructionText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    },
    buttonsContainerWide: {
        flexDirection: "row",
        alignItems: 'center',
    },
})

export default GameScreen