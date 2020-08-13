const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");

//middleware
app.use(cors());
//access to req.body data
app.use(express.json());

//routes

//create a todo

//get todos list

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
