"use strict";

var path = require("path");
var appDir = path.dirname(require.main.filename);
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
  {
    id: 1,
    title: "Sofa 1",
    description: "Lorem ipsum sit amet",
    fileName: "sofa1.obj",
    searchTag: "sofa",
    category: "mobila",
  },
  {
    id: 2,
    title: "Chair 5",
    description: "Lorem ipsum sit amet",
    fileName: "chair5.obj",
    searchTag: "scaun",
    category: "mobila",
  },
  {
    id: 3,
    title: "kitchen 1",
    description: "Lorem ipsum sit amet",
    fileName: "kitchen1.obj",
    searchTag: "ttt",
    category: "mobila",
  },
  {
    id: 4,
    title: "Barstool",
    description: "Lorem ipsum sit amet",
    fileName: "Barstool.obj",
    searchTag: "ttt",
    category: "mobila",
  },
  {
    id: 5,
    title: "sofa_chair",
    description: "Lorem ipsum sit amet",
    fileName: "sofa_chair.obj",
    searchTag: "ttt",
    category: "mobila",
  },
  {
    id: 6,
    title: "Chair 1",
    description: "Lorem ipsum sit amet",
    fileName: "chair2.obj",
    searchTag: "ttt",
    category: "mobila",
  },
  {
    id: 7,
    title: "Chair 1",
    description: "Lorem ipsum sit amet",
    fileName: "chair2.obj",
    searchTag: "ttt",
    category: "mobila",
  },
  {
    id: 8,
    title: "Chair 1",
    description: "Lorem ipsum sit amet",
    fileName: "chair2.obj",
    searchTag: "ttt",
    category: "mobila",
  },
  {
    id: 9,
    title: "Chair 1",
    description: "Lorem ipsum sit amet",
    fileName: "chair2.obj",
    searchTag: "ttt",
    category: "mobila",
  },
];

exports.modelslist = function (req, res) {
  res.send(modelData);
};

exports.modelName = function (req, res) {
  const fileName = req.params.name;
  const options = { root: path.join(__dirname, `../models/`) };
  res.sendFile(fileName, options);
};
