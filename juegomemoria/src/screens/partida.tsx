import { View, StyleSheet, Button } from 'react-native';
import React from 'react';
import PartidasComponent from '../components/PartidasComponent';
import { useNavigation } from '@react-navigation/native';

export default function PartidasScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <PartidasComponent />
            <View style={styles.buttonContainer}>
                <Button 
                    title="Volver al Juego" 
                    onPress={() => navigation.goBack()} 
                    color="#6200ee"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    buttonContainer: {
        margin: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
});