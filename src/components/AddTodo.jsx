import addTodoCSS from "./AddTodo.module.css";
import "../App.css";
import { useState, useRef } from "react";

function AddTodo({ setItems }) {
  // const [todoName, setTodoName] = useState();
  // const [dueDate, setDueDate] = useState();

  let todoName = useRef();
  let dueDate = useRef();

  const handleAddButtonClicked = () => {
    setItems(todoName.current.value, dueDate.current.value);
    todoName.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <div className="container text-center">
      <div className="row kg-row item-container">
        <div className="col-6">
          <input
            className={addTodoCSS}
            type="text"
            placeholder="Enter Text here"
            ref={todoName}
          />
        </div>
        <div className="col-4">
          <input className={addTodoCSS} type="date" ref={dueDate} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-info kg-button"
            onClick={(event) => {
              handleAddButtonClicked();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
