"use strict";

var path = require("path");
var appDir = path.dirname(require.main.filename);
const modelData = [
  {
    id: 0,
    title: "Scaun RAD",
    description:
      "Dimensiuni	Lățime: 72 cm,\n Înălțime: 83 cm,\n Adâncime: 80 cm\nÎnălțimea șezutului	38  \nDimensiune înainte de asamblat	Lățime: 72 cm, Lungime: 92 cm, Înălțime: 32 cm Greutate	6 kg Material	Cadru: Oțel, Spătar: Polietilenă, Șezut: Polietilenă Caracteristică	Picioare detașabile Tratament	Vopsit electrostatic Culoare	Negru Informații asamblare	Neasamblat Depozitare	A se depozita în interior pe timpul iernii",
    fileName: "Scaun_Vechi.obj",
    searchTag: "Scaun RAD",
    category: "Scaun",
    thumbnail: "Scaun_Vechi.png",
  },
  {
    id: 1,
    title: "Canapea MARK",
    description: "Lorem ipsum sit amet",
    fileName: "Canapea_MARK.obj",
    searchTag: "Canapea MARK",
    category: "Canapea",
    thumbnail: "Canapea_MARK.png",
  },
  {
    id: 2,
    title: "Scaun Bucatarie",
    description: "Lorem ipsum sit amet",
    fileName: "Scaun_Bucatarie.obj",
    searchTag: "scaun",
    category: "Scaun",
    thumbnail: "Scaun_Bucatarie.png",
  },
  {
    id: 4,
    title: "Barstool",
    description: "Lorem ipsum sit amet",
    fileName: "Scaun_Bar.obj",
    searchTag: "Scaun Bar",
    category: "Scaun",
    thumbnail: "Scaun_Bar.png",
  },
  {
    id: 5,
    title: "Canapea PRO x",
    description: "Lorem ipsum sit amet",
    fileName: "Canapea_PRO.obj",
    searchTag: "Canapea PRO",
    category: "Canapea",
    thumbnail: "Canapea_PRO.png",
  },
  {
    id: 6,
    title: "Canapea VED x",
    description: "Lorem ipsum sit amet",
    fileName: "Canapea_VED.obj",
    searchTag: "Canapea VED",
    category: "Canapea",
    thumbnail: "Canapea_VED.png",
  },
  {
    id: 7,
    title: "Garderoba",
    description: "Lorem ipsum sit amet",
    fileName: "Garderoba.obj",
    searchTag: "Garderoba",
    category: "Mobila",
    thumbnail: "Garderoba.png",
  },
  {
    id: 8,
    title: "Masa de cafea HERJ",
    description: "Lorem ipsum sit amet",
    fileName: "Masa_de_cafea.obj",
    searchTag: "Masa de cafea",
    category: "Mobila",
    thumbnail: "Masa_de_cafea.png",
  },
  {
    id: 9,
    title: "Canapea MORA",
    description:
      "Dimensiuni	Lățime: 170 cm, Înălțime: 76 cm, Adâncime: 141 cm Înălțimea șezutului	35 Înălțime braț scaun	59 cm Dimensiune înainte de asamblat	Lățime: 77 cm, Lungime: 162 cm, Înălțime: 27 cm Greutate	23 kg Material	Cadru: Oțel, Spătar: Poliratan, Șezut: Poliratan, Brațe: Poliratan Caracteristică	Poate fi inversat Tratament	Vopsit electrostatic Instrucțiuni	Poate fi curățat cu apă pe suprafețe mici Culoare	Gri Include	Perne luxoase cu husă rezistentă din poliester țesut Informații asamblare	Neasamblat Depozitare	A se depozita în interior pe timpul iernii",
    fileName: "Canapea_MORA.obj",
    searchTag: "Canapea MORA",
    category: "Canapea",
    thumbnail: "Canapea_MORA.png",
  },
  {
    id: 10,
    title: "Gaming_Chair",
    description: "Scaun de Gaming",
    fileName: "Gaming_Chair.obj",
    searchTag: "Scaun de Gaming",
    category: "Scaun",
    thumbnail: "Gaming_Chair.png",
  },
  {
    id: 11,
    title: "Scaun Charles Club",
    description:
      "Scaunul Charles Club este fabricat manual la comandă în SUA și este complet personalizabil. Afișat în arțar cu finisaj lucios SVDA.",
    fileName: "The_Charles_Club_Chair.obj",
    searchTag: "Scaun Charles Club",
    category: "Scaun",
    thumbnail: "The_Charles_Club_Chair.png",
  },
  {
    id: 12,
    title: "Scaun Bucatarie SKE",
    description: "bucatarie",
    fileName: "Scaun_Bucatarie_SKE.obj",
    searchTag: "Scaun Bucatarie SKE",
    category: "Scaun",
    thumbnail: "Scaun_Bucatarie_SKE.png",
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

exports.deleteModel = function (req, res) {
  let deleteId = req.params.id;
  let deleteObj = modelData.find((item) => item.id == deleteId);
  let deleteIndex = modelData.indexOf(deleteObj);
  modelData.splice(deleteIndex, 1);
  res.send(deleteObj);
};
