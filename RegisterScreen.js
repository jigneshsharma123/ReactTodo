// RegisterScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleRegister = () => {
        // Implement registration logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Register</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry
                />
                <Button
                    title="Register"
                    onPress={handleRegister}
                                    />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddfede', 
    },
    formContainer: {
        width: '80%',
        backgroundColor: '#fed', 
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
        borderRadius: 5,
    },
});

export default RegisterScreen;
