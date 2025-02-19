const express = require('express');
const app = express();
const mongoose = require('mongoose');

const rutaCoches = require('./routes/cocheRuta');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/api/coches", rutaCoches);

//Conexion a mongoose
mongoose.connect('mongodb://127.0.0.1:27017/bbdd-coche_2025')
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch(err => {
        console.log('Error al conectar a MongoDB', err);
    });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
