import { useEffect, useState } from "react";
import Filter from "./Filter";
import NavBar from "./NavBar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    filterTodo(filterValue);
  }, [todos, filterValue]);

  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    console.log(id);

    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const updateTodo = (id, newValue) => {
    console.log(id);

    const index = todos.findIndex((todo) => todo.id === id);
    console.log(index);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };

  const filterTodo = (value) => {
    const newValue = value.value;
    console.log("first todos", newValue);
    switch (newValue) {
      case "":
        setFilteredTodos(todos);
        break;
      case "Completed":
        const filteredCompleted = todos.filter((t) => t.isCompleted === true);
        setFilteredTodos(filteredCompleted);
        break;
      case "Not completed":
        const filteredNotCompleted = todos.filter(
          (t) => t.isCompleted === false
        );
        setFilteredTodos(filteredNotCompleted);
        break;
      default:
        return setFilteredTodos(todos);
    }
  };
  return (
    <div className="container">
      <NavBar
        notCompleted={todos.filter((t) => t.isCompleted === false).length}
      />
      {/* <Filter
        onFilter={filterTodo}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      /> */}
      <TodoForm todoHandler={addTodoHandler} />
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdate={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
