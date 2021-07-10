"use strict";
module.exports = function (app) {
  var models = require("../controllers/modelController");

  // todoList Routes
  app.route("/models").get(models.modelslist);
  app.route(`/model/:name`).get(models.modelName);
  app.route(`/model/delete/:title`).delete(models.deleteModel);
  // app.route(`/model/:thumbnail`).get(models.thumbnailName);
};
