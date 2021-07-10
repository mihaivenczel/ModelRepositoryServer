"use strict";
module.exports = function (app) {
  var models = require("../controllers/modelController");

  // todoList Routes
  app.route("/models").get(models.modelslist);
  app.route(`/model/:name`).get(models.modelName);
  app.route(`/model/delete/:id`).get(models.deleteModel);
  // app.route(`/model/:thumbnail`).get(models.thumbnailName);
};
