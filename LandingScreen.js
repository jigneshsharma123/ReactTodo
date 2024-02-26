import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
const LandingScreen = () => {
    const navigation = useNavigation();
    return (
        // <LinearGradient
        //     colors={['#007bff', '#cde']}
        //     start={[0, 0]}
        //     end={[1, 1]}
        //     style={styles.container}
        // >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome To TODO Manager</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        // </LinearGradient>
    )
}
export default LandingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#ddfede'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '70%',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#000',
        fontSize: 22,
        textAlign: 'center',
    },
});