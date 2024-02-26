// HomeScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';
import AddTodoScreen from './AddTodoScreen';

const HomeScreen = ({ navigation }) => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy groceries' },
        { id: 2, text: 'Finish homework' },
        { id: 3, text: 'Go for a run' },
    ]);

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, { id: todos.length + 1, ...newTodo }]);
    };

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleEditTodo = (id, newText) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
    };

    const renderItem = ({ item }) => (
        <View style={styles.todoItem}>
            <Text>{item.text}</Text>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'red' }]}
                    onPress={() => handleDeleteTodo(item.id)}
                >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: 'blue', marginLeft: 10 }]}
                    onPress={() => navigation.navigate('EditTodo', { id: item.id, text: item.text, handleEditTodo })}
                >
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Todo List</Text>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.flatListContainer}
            />
            <Button
                title="Add Todo"
                onPress={() => navigation.navigate('AddTodo', { addTodo: handleAddTodo })}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    todoItem: {
        backgroundColor: '#dde',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    flatListContainer: {
        flexGrow: 1,
    },
});

export default HomeScreen;
