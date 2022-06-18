import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";

const todoList = [
  {
    item: "todo",
    done: false,
    id: 12345678,
  },
  {
    item: "todo2",
    done: true,
    id: 12353523657688,
  },
];

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItems name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
