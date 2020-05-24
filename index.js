const express = require("express");
const app = express();
const fs = require('fs');
const port = 3000;

const routeHandlerOne = (req, res) => {
  console.log("example handler 1");
  const file = `${__dirname}/data.csv`;
  const data = fs.readFileSync(file, 'utf-8');
  console.log(`the data is ${data}`)
  res.download(file, 'the-test-file.csv', (err) => {
    if (err) {
      res.status(500).send('error');
    }
    else {
      console.log('file was downloaded')
    }
  })
};

app.get("/api/download/csv", routeHandlerOne);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
