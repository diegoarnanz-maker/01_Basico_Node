const express = require('express');
const ruta = express.Router();
const Coche = require('../model/Coche');

const findAll = async (req, res) => {
    try {
        const cochesList = await Coche.find();
        res.status(200).send(cochesList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    findAll
};