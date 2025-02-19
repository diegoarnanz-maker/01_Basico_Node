const express = require('express');
const route = express.Router();

//COCHES DB
let coches = [
    {_id: 0, marca: "Ford", modelo: "Focus", color: "Rojo", matricula: "1234ABC", year: "2000"},
    {_id: 1, marca: "Renault", modelo: "Megane", color: "Azul", matricula: "5678DEF", year: "2005"},
    {_id: 2, marca: "Seat", modelo: "Ibiza", color: "Blanco", matricula: "9101GHI",year: "2010"},
];

// http://localhost:3000/api/coches/todos
route.get("/todos", (req, res) => {
    res.status(200).send(coches);
});

// http://localhost:3000/api/coches/marca/Renault
route.get("/marca/:marca", (req, res) => {

    let marca = coches.filter(coche => coche.marca === req.params.marca);
    res.status(200).send(marca);
});

// http://localhost:3000/api/coches/uno/1
route.get("/uno/:id", (req, res) => {
    const coche = coches.find(coche => coche._id == req.params.id);
    if(coche){
        res.status(200).send(coche);
    }else{
        res.status(404).send("Coche no encontrado");
    }
});

module.exports = route;