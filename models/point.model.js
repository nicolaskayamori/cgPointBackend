const mongoose = require('mongoose');

const PointSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Por favor digite o nome do Point'],
        },

        insta_profile: {
            type: String,
            required: false,
            default: null
        },

        telefone: {
            type: String,
            required: false,
            default: null
        },

        endereco: {
            type: String,
            required: false,
            default: null
        },

        cardapio: {
            type: String,
            required: false,
            default: null
        },

        oferta: {
            type: String,
            required: false,
            default: null
        },
        
        descript: {
            type: String,
            required: true,
            default: null
        }
    },
    {
        timestamps: true,
    }
);

const Point = mongoose.model("Point", PointSchema);

module.exports = Point;