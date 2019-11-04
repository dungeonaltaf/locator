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

// putting index.html
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
  });
//putting cors
app.use(cors());

 //body-parser
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

app.use('/api', route);
app.listen(port,function (){
    console.log("listening on:"+port);
})