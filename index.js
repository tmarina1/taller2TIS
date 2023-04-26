const express = require("express");
const os = require("os");
const app = express();
const port = 80;

const pokeneasInfo = [
  {
    Id: 1,
    Nombre: "Tomas",
    Altura: "120",
    Habilidad: "Robar",
    Imagen: "https://storage.googleapis.com/imagenes_pokeneas/001.png",
    Frasefilosofica: "Es mejor robar que trabajar",
  },
  {
    Id: 2,
    Nombre: "Simon",
    Altura: "110",
    Habilidad: "Tirar cuchillo",
    Imagen: "https://storage.googleapis.com/imagenes_pokeneas/002.png",
    Frasefilosofica: "Eso cabezon",
  },
  {
    Id: 3,
    Nombre: "Yepes",
    Altura: "120",
    Habilidad: "Saltar",
    Imagen: "https://storage.googleapis.com/imagenes_pokeneas/003.png",
    Frasefilosofica: "Mero gato",
  },
  {
    Id: 4,
    Nombre: "Pablo",
    Altura: "120",
    Habilidad: "Correr",
    Imagen: "https://storage.googleapis.com/imagenes_pokeneas/004.png",
    Frasefilosofica: "Mera corrida",
  },
  {
    Id: 5,
    Nombre: "Carlos",
    Altura: "120",
    Habilidad: "Parla",
    Imagen: "https://storage.googleapis.com/imagenes_pokeneas/005.png",
    Frasefilosofica: "Tengo mera labia",
  },
  {
    Id: 6,
    Nombre: "Pedro",
    Altura: "140",
    Habilidad: "Dar visaje",
    Imagen: "https://storage.googleapis.com/imagenes_pokeneas/006.png",
    Frasefilosofica: "Mero visajoso",
  },
  {
    Id: 7,
    Nombre: "Sandro",
    Altura: "100",
    Habilidad: "Robar",
    Imagen: "https://storage.googleapis.com/imagenes_pokeneas/007.png",
    Frasefilosofica: "Es mejor robar que trabajar",
  },
];

app.get("/infoPokenea", (req, res) => {
  const number = Math.floor(Math.random() * 7);
  res.send(
    pokeneasInfo[number]["Id"] +
      pokeneasInfo[number]["Nombre"] +
      pokeneasInfo[number]["Altura"] +
      pokeneasInfo[number]["Habilidad"] +
      " - Container Id: " +
      os.hostname()
  );
});

app.get("/mediaPokenea", (req, res) => {
  const number = Math.floor(Math.random() * 7);
  res.send(
    pokeneasInfo[number]["Frasefilosofica"] +
      pokeneasInfo[number]["Imagen"] +
      " - Container Id: " +
      os.hostname()
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
