var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

// Routes
var routes = require('./routes/homepage');
var about = require('./routes/about');
var hobbies = require('./routes/hobbies');

var app = express();

// =================
// App configuration
// =================
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//app.use(bodyParser.json());





app.use('/',routes);
app.use('/about',about);
app.use('/hobbies',hobbies);




app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server is running");
}); 
