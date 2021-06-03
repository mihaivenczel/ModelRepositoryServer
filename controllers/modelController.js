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
    thumbnail: "chair1.png",
  },
  {
    id: 1,
    title: "Sofa 1",
    description: "Lorem ipsum sit amet",
    fileName: "sofa1.obj",
    searchTag: "sofa",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 2,
    title: "Chair 5",
    description: "Lorem ipsum sit amet",
    fileName: "chair5.obj",
    searchTag: "scaun",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 3,
    title: "kitchen 1",
    description: "Lorem ipsum sit amet",
    fileName: "kitchen1.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 4,
    title: "Barstool",
    description: "Lorem ipsum sit amet",
    fileName: "Barstool.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 5,
    title: "sofa_chair",
    description: "Lorem ipsum sit amet",
    fileName: "sofa_chair.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 6,
    title: "Kitchen Table",
    description: "Lorem ipsum sit amet",
    fileName: "Kitchen_Table.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 7,
    title: "Wardrobe",
    description: "Lorem ipsum sit amet",
    fileName: "Wardrobe.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 8,
    title: "black coffee table",
    description: "Lorem ipsum sit amet",
    fileName: "black_coffee_table.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 9,
    title: "The Couch",
    description: "Lorem ipsum sit amet",
    fileName: "The_Couch.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 10,
    title: "Gaming_Chair",
    description: "Lorem ipsum sit amet",
    fileName: "Gaming_Chair.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
  },
  {
    id: 11,
    title: "The_Charles_Club_Chair",
    description: "Lorem ipsum sit amet",
    fileName: "The_Charles_Club_Chair.obj",
    searchTag: "ttt",
    category: "mobila",
    thumbnail: "",
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

