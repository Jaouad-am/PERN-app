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

//update a todo

//delete a todo
