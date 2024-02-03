import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  let [todoItems, setTodoItems] = useState([]);
  let demoArrObj = [{}];

  // Adding items to list
  let setItems = (name, date) => {
    if (name === "" || date === "") {
      return alert("Please  enter a valid name and date");
    }

    setTodoItems((currentValue) => {
      return [{ name: name, date: date }, ...currentValue];
    });
  };

  // ? deleting items from list
  let deleteItem = (event, name, date) => {
    let newArry = [...todoItems];
    newArry = newArry.filter((obj) => {
      return obj.name !== name && obj.date !== date;
    });
    setTodoItems(newArry);
  };

  return (
    <center className="todo-Container container">
      <AppName />
      <AddTodo setItems={setItems} />
      <TodoItem todoItems={todoItems} deleteItem={deleteItem} />
    </center>
  );
}

export default App;
