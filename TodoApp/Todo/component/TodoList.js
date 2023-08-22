import TodoItem from "./TodoItem";
import { View } from "react-native";

const TodoList = ({ todos, markCompleted, deleteTodo }) => {
    return (
      <View style={{border:"1px solid black",padding:'10px'}}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markCompleted={markCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </View>
    );
  };
  
  export default TodoList