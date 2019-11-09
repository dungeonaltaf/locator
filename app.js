var express = require('express');
var cors = require('cors')
var mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port  = 3000;
const app = express();
var mongoose = require('mongoose');
var path = require('path');
var route = require('./route');
var router = express.Router();
const session = require('express-session');
var urlencoder = bodyparser.urlencoded({extended:false});
var GPS = require('./models/gps');

//putting index.html
app.use(express.static(__dirname+'/public'));
//session created
app.use(session({secret:'ssshhh'}));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
  });

app.post('/post/login/',urlencoder,function(req,res){
    
    sess= req.session;
    sess.email = req.body.login_email;
    sess.password = req.body.login_password;

    console.log(sess.password);
    console.log(req.body);

    GPS.findOne({email:sess.email}, function(err,docs){
        if(err||!docs){
            console.log("error occured");
            res.sendFile(path.join(__dirname + '/index.html'));
        }
        else{
            console.log("successful found it");
            sess.first_name = docs.first_name;
            sess.last_name = docs.last_name;
            res.sendFile(path.join(__dirname + '/public/html/util.html'));

        }
    });

});

app.post('/post/logout/', urlencoder,function(req,res){
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        console.log("session destroyed user logout");
        res.redirect('/');
    });
});
//putting cors
app.use(cors());

//app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/journal', { useNewUrlParser: true }).
  catch(error => handleError(error));

// Or:
try {
   mongoose.connect('mongodb://localhost:27017/journal', { useNewUrlParser: true });
} catch (error) {
  handleError(error);
}


mongoose.connection.on('connected',function(){
    console.log("Connection successful to mongdb");
});

mongoose.connection.on('error',function(err){
      console.log(err);
});



//creating route to route.js
app.use('/api', route);

//listening to port 3000
app.listen(port,function (){
    console.log("listening on:"+port);
})