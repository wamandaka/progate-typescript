import { Todo } from "../TodoType";

type TodoItemProps = {
  todo: Todo;
  toggleCompleted: (todoId: number) => void;
};
const TodoItem = ({ todo, toggleCompleted }: TodoItemProps) => {
  const getTodoTitleStyle = (): { textDecoration: "line-through" | "none" } => {
    if (todo.completed) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };
  return (
    <div>
      <input type="checkbox" onChange={(): void => toggleCompleted(todo.id)} />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
