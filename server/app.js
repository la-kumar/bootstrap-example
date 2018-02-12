var express = require('express');
var app = express();
var path = require('path');

var router = require('./routes');

app.listen(5000, function(err) {
  if(err){
  	console.log("ERROR");
  }
  else{
  	console.log("listening on port 5000");
  }
})

var staticPath = path.join(__dirname , '../public');


app.use(express.static(staticPath));

app.use('/',router);