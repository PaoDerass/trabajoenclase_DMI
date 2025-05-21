import { View, Button, StyleSheet } from 'react-native';
import React from 'react';
import CartaComponent from '../components/CartaComponent';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <CartaComponent />
            <View style={styles.buttonContainer}>
                <Button 
                    title="Ver Historial de Partidas" 
                    onPress={() => navigation.navigate('Partidas')} 
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
        marginTop: 20,
        marginHorizontal: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
});