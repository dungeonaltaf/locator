var express = require('express');
var router = express.Router();
var GPS = require('./models/gps');
var cors = require('cors');
var path = require('path');
var bodyparser = require('body-parser');
var urlencoder = bodyparser.urlencoded({extended:false});
const session = require('express-session');


router.post('/post/location/',urlencoder,function(req,res){
    
    console.log("post called");
    console.log(req.body); 
    console.log("sesssion emails:"+sess.email);
    console.log("session passwords:"+sess.password);
    console.log("session first_name:"+sess.first_name);
    console.log("session last_name:"+sess.last_name);
  //assigning posted location to database 


  var query = { email: sess.email };
  
  GPS.findOneAndUpdate(query, { latitude: req.body.latitude , longitude:req.body.longitude },function(err,doc){
    if(err || !doc){
        console.log("couldn't update location");
    }
    else{
    console.log("Updated lcoation");
    }
  });
        

    
});
//let newGPS =  new GPS({    

  //  latitude : req.body.latitude,
  //  longitude : req.body.longitude,
  //  phone : req.body.phone,

  //  });
  //  newGPS.save((err,GPS)=>{
    //    if (err){
      //      res.json({msg : "failed to add"});
      //  }
      //  else{
        //    res.json({msg: "added"});
       // }
   // });

//});
    



//API for signin
router.post('/post/signin/',urlencoder,function(req,res){
        
    console.log(req.body);

//creating the credentials.    
    let newGPS =  new GPS({    
        
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password    
           
    });

 //saving the credentials    
        newGPS.save((err,GPS)=>{
            if (err){
                res.json({msg : "failed to add"});
            }
            else{
                res.json({msg: "added"});
                }
            });
});

//api for Angular 
router.get('/get/location/',urlencoder,function(req,res){
    console.log("response has been sent");
    
    GPS.find(function(err,gps){
        res.json(gps);
        console.log("response has been sent");
        console.log(gps);
    });
});
module.exports = router;