import CreateTodo from "./component/CreateTodo";
import TodoList from "./component/TodoList";
import { useState } from "react";
import { View,Text } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import TodosScreen from "./screens/TodosScreen";
// import CreateScreen from "./screens/CreateScreen";



const initialTodos = [
  {
    id: 1,
    title: "Buy groceries",
    description: "Get milk, eggs, and bread.",
    completed: false,
  }
];
export default function App() {
  const [todos, setTodos] = useState(initialTodos);

  // const Stack = createStackNavigator();


  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const markCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  
  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };
  

  return (
    <View style={{ margin:"auto",width:"40%",padding:"20px"}}>
      <Text style={{fontSize:"40px",fontFamily:"cursive"}}>Todo App</Text>
      <CreateTodo addTodo={addTodo} />
      <TodoList
      todos={todos}
      markCompleted={markCompleted}
      deleteTodo={deleteTodo}
/>
    </View>
  );
}
