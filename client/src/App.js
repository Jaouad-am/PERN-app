import React, { Fragment } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodosList";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AddTodo />
        <TodoList />
      </div>
    </Fragment>
  );
}

export default App;
