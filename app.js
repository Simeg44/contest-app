var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

var info = [];

app.get('/', indexController.index);

app.post("/formsubmit", function(req, res) {
	var tempUrl = req.body.url;



	info.push(req.body);
	res.redirect("/submitted")
})



app.get("/submitted", function(req, res) {
	res.send("Success")
})

app.get("/submissions", function(req, res) {
	res.render("submissions", {
		info: info
	});
	
})

var server = app.listen(4403, function() {
	console.log('Express server listening on port ' + server.address().port);
});
