import React, { Fragment } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <AddTodo />
      </div>
    </Fragment>
  );
}

export default App;
