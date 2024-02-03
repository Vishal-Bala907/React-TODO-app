import React from "react";
import "../App.css";
import TodoItems from "./TodoItems";

export default function TodoItem({ todoItems, deleteItem }) {
  return (
    <>
      {todoItems.length === 0 && (
        <h2 className="text-center mt-5">No Items in the List </h2>
      )}

      {todoItems.map((item) => {
        return (
          <TodoItems
            key={item.name}
            item={item.name}
            date={item.date}
            deleteItem={deleteItem}
          />
        );
      })}
    </>
  );
}
