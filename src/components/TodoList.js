import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });

  const todoHandler = (newValue) => {
    onUpdate(edit.id, newValue);
    setEdit({ id: null, text: "", isCompleted: false });
  };

  const renderTodos = () => {
    if (todos.length === 0) return <p>Add some todo's</p>;
    return todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        onComplete={() => onComplete(todo.id)}
        onDelete={() => onDelete(todo.id)}
        onEdit={() => setEdit(todo)}
      />
    ));
  };

  return (
    <div>
      {edit.id ? (
        <TodoForm todoHandler={todoHandler} edit={edit} />
      ) : (
        renderTodos()
      )}
    </div>
  );
};

export default TodoList;
