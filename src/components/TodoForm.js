import { useEffect, useRef, useState } from "react";

const TodoForm = ({ todoHandler, edit }) => {
  const [todo, setTodo] = useState(edit ? edit.text : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("enter your todo !");
      return;
    }

    todoHandler(todo);
    setTodo("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="formControl">
      <input
        type="text"
        value={todo}
        onChange={changeHandler}
        placeholder={edit ? "Update todo..." : "Add new todo..."}
        ref={inputRef}
      />
      <button className={`btn ${edit ? 'updateTodo' : 'addTodo'}`} type="submit">{edit ? "Update" : "Add"}</button>
      </div>
    </form>
  );
};

export default TodoForm;
