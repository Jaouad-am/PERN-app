const express = require("express");
const cors = require("cors");
const app = express();

//middleware
app.use(cors());
//access to req.body data
app.use(express.json());

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
