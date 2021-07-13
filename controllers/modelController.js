"use strict";

var path = require("path");
var appDir = path.dirname(require.main.filename);
const modelData = [
  {
    id: 0,
    title: "Scaun RAD",
    description:
      "Dimensiuni	Lățime: 72 cm,\n Înălțime: 83 cm,\n Adâncime: 80 cm\nÎnălțimea șezutului	38\nDimensiune înainte de asamblat	Lățime: 72 cm, Lungime: 92 cm, Înălțime: 32 cm Greutate	6 kg Material	Cadru: Oțel, Spătar: Polietilenă, Șezut: Polietilenă Caracteristică	Picioare detașabile Tratament	Vopsit electrostatic Culoare	Negru Informații asamblare	Neasamblat Depozitare	A se depozita în interior pe timpul iernii",
    fileName: "Scaun_Vechi.obj",
    searchTag: "Scaun RAD",
    category: "Scaun",
    thumbnail: "Scaun_Vechi.png",
  },
  {
    id: 1,
    title: "Canapea MARK",
    description: "Material: Spumă, MDF, PFL, Placaj, Poliester, Lemn masiv de arbore de cauciuc\nTratament: Lăcuit\nUmplutură	Spumă, Poliester\nFoaie exterioară: 100% poliester\nCuloare	Gri închis\nNumăr de arcuri/m²	7\nDimensiune după asamblare	Lungime: 200 cm, Înălțime: 80 cm, Adâncime: 80 cm\nÎnălțimea șezutului	44\nAdâncimea scaunului	50\nInformații asamblare	Neasamblat\nDimensiune înainte de asamblat	Lățime: 65 cm, Lungime: 174 cm, Înălțime: 88 cm\nNumărul de ambalaje	2",
    fileName: "Canapea_MARK.obj",
    searchTag: "Canapea MARK",
    category: "Canapea",
    thumbnail: "Canapea_MARK.png",
  },
  {
    id: 2,
    title: "Scaun Bucatarie",
    description: "Material	Spumă, Metal, Placaj, Poliester\nCapitonare	Șezut și spătar\nCuloare	Gri, Stejar\nDimensiune după asamblare	Lățime: 43 cm, Înălțime: 84 cm, Adâncime: 53 cm\nÎnălțimea șezutului	44\nAdâncimea scaunului	39\nInformații asamblare	Neasamblat\nDimensiune înainte de asamblat	Lățime: 60 cm, Lungime: 60 cm, Înălțime: 50 cm\nTestat pentru	110 kg",
    fileName: "Scaun_Bucatarie.obj",
    searchTag: "scaun",
    category: "Scaun",
    thumbnail: "Scaun_Bucatarie.png",
  },
  {
    id: 4,
    title: "Barstool",
    description: "Material	Spumă, Lemn de esență tare, Placaj, Poliester, Lemn masiv de pin\nTratament	Lăcuit\nCapitonare	Șezut și spătar\nCuloare	Gri, Negru\nDimensiune după asamblare	Lățime: 47 cm, Înălțime: 107 cm, Adâncime: 62 cm\nÎnălțimea șezutului	48\nAdâncimea scaunului	44\nInformații asamblare	Neasamblat\nDimensiune înainte de asamblat	Lățime: 47 cm, Lungime: 107 cm, Înălțime: 47 cm\nTestat pentru	110 kg",
    fileName: "Scaun_Bar.obj",
    searchTag: "Scaun Bar",
    category: "Scaun",
    thumbnail: "Scaun_Bar.png",
  },
  {
    id: 5,
    title: "Canapea PRO x",
    description: "Tip	canapea cu 2 locuri\nMaterial	Imitație de piele, Spumă, Lemn de esență tare, Metal, PFL\nUmplutură	Spumă\nCuloare	Negru\nDimensiune după asamblare	Lățime: 158 cm, Înălțime: 80 cm, Adâncime: 84 cm\nÎnălțimea șezutului	42\nAdâncimea scaunului	57\nInformații asamblare	Neasamblat\nDimensiune înainte de asamblat	Lățime: 112 cm, Lungime: 124 cm, Înălțime: 40 cm\nGreutate	47 kg\nNumărul de ambalaje	1",
    fileName: "Canapea_PRO.obj",
    searchTag: "Canapea PRO",
    category: "Canapea",
    thumbnail: "Canapea_PRO.png",
  },
  {
    id: 6,
    title: "Canapea VED x",
    description: "Tip	colțar cu 3 locuri\nMaterial	Imitație de piele, Spumă, Lemn de esență tare, Metal, PFL\nUmplutură	100% poliester, Spumă poliuretanică\nCuloare	Negru\nCaracteristică	Poate fi inversat\nDimensiune după asamblare	Lățime: 260 cm, Înălțime: 80 cm, Adâncime: 84/150 cm\nÎnălțimea șezutului	43\nAdâncimea scaunului	84\nInformații asamblare	Neasamblat\nDimensiune înainte de asamblat	Lățime: 113 cm, Lungime: 153 cm, Înălțime: 121 cm\nGreutate	82 kg\nNumărul de ambalaje	2",
    fileName: "Canapea_VED.obj",
    searchTag: "Canapea VED",
    category: "Canapea",
    thumbnail: "Canapea_VED.png",
  },
  {
    id: 7,
    title: "Garderoba",
    description: "Material	HDF (Placă fibrolemnoasă de mare densitate), Melamină, PFL\nCuloare	Alb\nTip	Uși cu balamale\nCaracteristicile sertarelor	Sistem de oprire a sertarului\nInclude	1 bară pentru umerașe 3 rafturi, 2 uși, 3 sertare\nDimensiune după asamblare	Lățime: 96 cm, Înălțime: 176 cm, Adâncime: 50 cm\nInformații asamblare	Neasamblat\nDimensiune înainte de asamblat	Lățime: 50 cm, Lungime: 183 cm, Înălțime: 18 cm\nGreutate	54 kg\nNumărul de ambalaje	2",
    fileName: "Garderoba.obj",
    searchTag: "Garderoba",
    category: "Mobila",
    thumbnail: "Garderoba.png",
  },
  {
    id: 8,
    title: "Masa de cafea HERJ",
    description: "Tip	Măsuță de cafea\nFormă	Pătrat\nMaterial	MDF, PFL\nTratament	Lăcuit\nCuloare	Alb\nInclude	1 raft\nDimensiune după asamblare	Lățime: 80 cm, Lungime: 80 cm, Înălțime: 46 cm\nInformații asamblare	Neasamblat\nDimensiune înainte de asamblat	Lățime: 83 cm, Lungime: 82 cm, Înălțime: 11 cm",
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
    description: "Compatibilitate platforma	Universal\nManevrare	Manual\nMaterial	Piele sintetica\nFunctii	Iluminare LED\nCuloare	Negru\nGreutate	21 Kg\nLungime	67 cm",
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
    description: "Material	Imitație de piele (PVC), MDF, Oţel\nTratament	Vopsit electrostatic\nCuloare	Negru\nCaracteristică	Pliabil\nDimensiune după asamblare	Diametru: 30 cm, Înălțime: 45 cm\nInformații asamblare	Asamblat",
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
