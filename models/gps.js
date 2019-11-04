const mongoose = require('mongoose');

const GPSschema = mongoose.Schema({

    latitude :{
        type: Number,
        required:true
    },
    longitude : {
        type: Number,
        required:true
    },
    phone : {
        type: Number,

    }

});

const GPS = module.exports = mongoose.model('GPS', GPSschema);