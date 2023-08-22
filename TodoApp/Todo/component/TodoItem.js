import React from "react";
import { View, Text, Button } from "react-native";

const TodoItem = ({ todo, markCompleted, deleteTodo }) => {
  return (
    <View>
      <Text style={{fontWeight:'700',fontSize:"20px"}}>Title:{todo.title}</Text>
      <Text>Description:{todo.description}</Text>
      <Button
        title={todo.completed ? "Completed" : "Mark Completed"}
        onPress={() => markCompleted(todo.id)}
        
      /><br/>
      <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
    </View>
  );
};

export default TodoItem;
