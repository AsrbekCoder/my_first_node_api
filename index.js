const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(JSON.stringify(require("./db.json")));
});

let port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server Run ${port}...`));
