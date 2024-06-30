import { Todo } from "../TodoType";
import TodoItem from "./TodoItem";

type TodosProps = {
  todos: Todo[];
  toggleCompleted: (todoId: number) => void;
};

const Todos = ({ todos, toggleCompleted }: TodosProps) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
          />
        );
      })}
    </div>
  );
};

export default Todos;
