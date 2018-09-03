var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();
//Models
var app = express();
app.use(express.static(__dirname + '/public'));
latlongController= require('./controller/latlongController');
router.route('/latlong')
   .post(latlongController.postLatlong);
var port = process.env.PORT || 3000; 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api',router);
app.listen(port);               

console.log('Magic happens on port ==============>' + port);

exports = module.exports = app;    