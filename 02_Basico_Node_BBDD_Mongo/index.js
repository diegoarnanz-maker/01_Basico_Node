const express = require('express');
const app = express();

const rutaCoches = require('./routes/cocheRuta');
const rutaSaludo = require('./routes/saludoRutas');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use("/api/coches", rutaCoches);
app.use("/api/saludo", rutaSaludo);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
