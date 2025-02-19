const mongoose = require('mongoose');

const cocheSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    },
    precio: Number,
    anio: {
        type: Number,
        required: true,
        min:2000
    },
    isVendido: {
        type: Boolean,
        default: false
    },
    extra: [String],
    fechaVenta: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true,
    versionKey: false
});

const Coche = mongoose.model('Coche', cocheSchema);

module.exports = Coche;