import React, { Fragment, useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    try {
      const todos = await fetch("http://localhost:5000/todos");
      const data = await todos.json();
      //console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => (
            <tr>
              <td>{todo.description}</td>
              <td>Edit</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default TodoList;
