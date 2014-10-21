var entryInfo = require("../models/videos.js");
var _ = require("underscore");

var apiController = {
	addEntry: function(req, res) {
		var tempUrl = req.body.url;
		var data = req.body;
		
		var myRegEx = /v=([a-zA-Z0-9]*)/;
		data.url = myRegEx.exec(tempUrl)[1];

		entryInfo.push(data);
		res.redirect("/submissions");
	},
	update: function(req, res) {
		var vote = req.body.choice;

		for (var i = 0; i < entryInfo.length; i++){
			if (vote === entryInfo[i].title) {
				entryInfo[i].votes++;
			}
		}
		var sorted = _.sortBy(entryInfo, function(entry) {
			return entry.votes;
		}).reverse();

		// res.render("submissions", {
		// 	info: sorted
		// });
		res.redirect("/submissions")
	}
};

module.exports = apiController;