const mongoose = require('mongoose');

const GPSschema = mongoose.Schema({

    latitude :Number,
    longitude :Number,
    phone : Number

});

const GPS = module.exports = mongoose.model('GPS', GPSschema);