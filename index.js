const express = require("express");
const app = express();
const port = 3000;

const routeHandlerOne = (req, res) => {
  console.log("example handler 1");
  res.send("route handler 1")
};



app.get("/api/download/csv", routeHandlerOne);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
