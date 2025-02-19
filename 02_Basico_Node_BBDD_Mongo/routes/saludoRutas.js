const express = require('express');
const route = express.Router();

// http://localhost:3000/api/saludo
route.get("/", (req, res) => {
    res.send("Hola Mundo");
});

// http://localhost:3000/api/saludo/profesor?nombre=Tomas&edad=64
route.get("/profesor", (req, res) => {
    let nombre = req.query.nombre;
    let edad = req.query.edad;
    res.send(`Hola ${nombre}, tienes ${edad} años`);
});

// http://localhost:3000/api/saludo/diego/28
route.get("/:nombre/:edad", (req, res) => {
    let nombre = req.params.nombre;
    let edad = req.params.edad;
    res.send(`Hola ${nombre}, tienes ${edad} años`);
});

module.exports = route;