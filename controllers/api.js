var entryInfo = require("../models/videos.js")

var apiController = {
	addEntry: function(req, res) {
		var tempUrl = req.body.url;
		var data = req.body;
		var array = tempUrl.split("");
		var tempArray = [];
		var start = false;

		array.map(function(letter) {
			if(start) {
				tempArray.push(letter);
			}
			if(letter === "=") {
				start = true;
			}
		})

		console.log(data.url);
		data.url = tempArray.join("");
		entryInfo.push(data);
		res.redirect("/submissions");
	}
};

module.exports = apiController;