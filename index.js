const modelData = [
  {
    id: 0,
    title: "Chair 1",
    description: "Un scaun simplu",
    fileName: "chair2.obj",
    searchTag: "scaun",
    category: "mobila",
    thumbnail: "generic link",
  },
];

var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

var routes = require("./routes/modelRoutes"); //importing route
routes(app); //register the route

module.exports = app;
