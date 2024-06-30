import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import { Todo } from "./TodoType";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId: number) => {
    const updatedTodos: Todo[] = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <Todos todos={todos} toggleCompleted={toggleCompleted} />
      </div>
    </>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};

export default App;
