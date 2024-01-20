import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ initialValues }) => {
  const [toDos, setToDos] = useState(initialValues.map((value) => ({ id: uuidv4(), title: value })));

  const addToDo = (newTitle) => {
    const newToDo = { id: uuidv4(), title: newTitle };
    setToDos((prevTodos) => [...prevTodos, newToDo]);
  };

  const removeToDo = (id) => {
    setToDos(toDos.filter((todo) => (todo.id != id)));
  };

  return (
    <View style={styles.todoListContainer}>
      {toDos.map((todo) => (
        <View key={todo.id} style={styles.todoItem}>
          <Text>{todo.title}</Text>
          <Button title="Remove" onPress={() => removeToDo(todo.id)} />
        </View>
      ))}
      <AddTask onAddTask={addToDo}/>
    </View>
  );
};

ToDoList.defaultProps = {
  initialValues: []
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;