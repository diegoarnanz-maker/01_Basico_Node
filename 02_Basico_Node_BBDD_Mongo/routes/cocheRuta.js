const express = require('express');
const route = express.Router();

const cocheRestcontroller = require('../Controllers/cocheRestcontroller');

route.get("/todos", cocheRestcontroller.findAll);

// route.get("/marca/:marca", cocheRestcontroller.findByMarca);

// route.get("uno/:id", cocheRestcontroller.findById);

// route.post("/alta:", cocheRestcontroller.alta);

module.exports = route;