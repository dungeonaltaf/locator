const mongoose = require('mongoose');

const GPSschema = mongoose.Schema({

    latitude :Number,
    longitude :Number,
    first_name: String,
    last_name: String,
    email: String,
    password: String

});

const GPS = module.exports = mongoose.model('GPS', GPSschema);