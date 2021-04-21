const express = require("express");
const app = express();
const fs = require("fs");
var cors = require("cors");

// const models = fs.readdirSync("./models");
// console.log(models);
app.use(cors());
app.get("/", (req, res) => {
  res.send({
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  });
  //   res.sendFile(__dirname + "/models/chair2.obj");
  //   res.sendFile(__dirname + "/models/chair2.png");
  //   res.sendFile(__dirname + "/models/chair5.obj");
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   fs.readFile(__dirname + "/models/" + "chair2.obj", (err, data) => {
  //   console.log(data);
  //     res.send(data);
  //   });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
