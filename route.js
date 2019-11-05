var express = require('express');
var router = express.Router();
var GPS = require('./models/gps');
var cors = require('cors');
var path = require('path');
var bodyparser = require('body-parser');
var urlencoder = bodyparser.urlencoded({extended:false});

router.post('/post/location/',urlencoder,function(req,res){
    console.log("post called");
    console.log(req.body); 
  
    let newGPS =  new GPS({    
    latitude : req.body.latitude,
    longitude : req.body.longitude,
    phone : req.body.phone,

    });
    newGPS.save((err,GPS)=>{
        if (err){
            res.json({msg : "failed to add"});
        }
        else{
            res.json({msg: "added"});
        }
    });
});

router.post('/post/login/',urlencoder,function(req,res){
        console.log(req);
});

router.post('/post/signin/',urlencoder,function(req,res){
        console.log(req);
});

router.get('/get/location/',urlencoder,function(req,res){
    console.log("response has been sent");
    GPS.find(function(err,gps){
        res.json(gps);
        console.log("response has been sent");
        console.log(gps);
    });
});
module.exports = router;