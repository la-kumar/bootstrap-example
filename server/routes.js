var express = require('express');
//var serverCtrl = require('./serverControler');
var app = express() ;
var url = require('url');
var bodyParser = require('body-parser');
var q = require('q');
var router = express.Router();
router.use(bodyParser.json());

router.get('/',function(req,res) {
   console.log("in home");
  res.sendFile(staticPath+'/index.html');	
});

// router.get('/',function(req,res) {
//    console.log("in home");
//   res.sendFile(staticPath+'/index.html');	
// });

// router.get('/view',function(req,res) {
//   var dataArray = [] ;
//   console.log("in view");
// console.log("/view in routes");
//  serverCtrl.getFunc().then(function(response) {
 
//   res.send(response);
// });
// });

// router.post('/create',function(req,res) {
// console.log('in post of routes.js');
// //console.log(req.body);
// serverCtrl.addFunc(req.body);

// }) ;

module.exports = router ;