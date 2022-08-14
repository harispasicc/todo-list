import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import TodoFrom from "./TodoForm";

function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    values: "",
  });

  const submitUpdate = value => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoFrom edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todos.map((todo, index) => {
    return (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <FaTrash onClick={() => props.removeTodo(todo.id)} />
          <BiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} />
        </div>
      </div>
    );
  });
}

export default Todo;
