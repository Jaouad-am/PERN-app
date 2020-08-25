const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./connection");

//starting the server on port 5000

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

//middleware
app.use(cors());
//access to req.body data
app.use(express.json()); //req.body

/******routes******/

//create a todo

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const list = await pool.query(
      "insert into todo (description) values($1) returning *", // returning the row that was inserted
      [description]
    );
    //wait for the query to be done
    //let result = await list;
    //gets the row inserted (using returning *)
    res.json(list.rows[0]);
    //res.send("todo added!!");
  } catch (error) {
    console.log(error.message);
  }
});

//get todos list
app.get("/todos", async (req, res) => {
  try {
    const list = await pool.query("select * from todo");
    res.json(list.rows);
  } catch (error) {
    console.log(error.message);
  }
});
//get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("select * from todo where todo_id=$1", [id]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});
//update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    res.json("Todo was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
});
