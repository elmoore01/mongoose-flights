const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest','United'],
        required: true, 
        unique: true,
    },
    
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN',
        required: true,
        unique: true,
    },

    flightNo: {
        type: Number,
        min: [10],
        max: [9999],
        required: true,
        unique: true,
    },

    departs: {
        type: Date,
        default: Date.now, // change to Date.now + 365 Days,
        required: true,
        unique: true,
    },
});