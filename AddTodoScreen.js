// AddTodoScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddTodoScreen = ({ navigation, route }) => {
    const [todoText, setTodoText] = useState('');

    const handleAddTodo = () => {
        if (todoText.trim() !== '') {
            // Pass the new todo item back to the previous screen
            route.params.addTodo({ text: todoText });
            // Navigate back to the previous screen
            navigation.goBack();
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Add Todo</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
                placeholder="Enter todo text"
                onChangeText={text => setTodoText(text)}
                value={todoText}
            />
            <Button
                title="Add Todo"
                onPress={handleAddTodo}
            />
        </View>
    );
};

export default AddTodoScreen;
