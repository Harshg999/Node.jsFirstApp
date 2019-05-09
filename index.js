var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

// Routes
var routes = require('./routes/homepage');
//var about = require('./routes/about');
//var hobbies = require('./routes/hobbies');

var app = express();

// =================
// App configuration
// =================
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
//app.use(bodyParser.json());





app.use(routes);
<<<<<<< HEAD
//app.use(about.router);
//app.use(hobbies.router);

=======
app.use(about);
app.use(hobbies);
>>>>>>> e0df53124e9f20d6b4fff37e429da9149099a303




app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server is running");
}); 
