// EditTodoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const EditTodoScreen = ({ navigation, route }) => {
    const { id, text, handleEditTodo } = route.params;
    const [todoText, setTodoText] = useState(text);

    const handleEdit = () => {
        // Call the handleEditTodo function to update the todo item
        handleEditTodo(id, todoText);
        // Navigate back to the HomeScreen
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Edit Todo</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter new todo text"
                value={todoText}
                onChangeText={setTodoText}
            />
            <Button
                title="Save"
                onPress={handleEdit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default EditTodoScreen;
