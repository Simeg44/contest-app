var entryInfo = require("../models/videos.js");
var _ = require("underscore")

var indexController = {
	index: function(req, res) {
		res.render('index', {
			entries: entryInfo.length
		});
	},
	submissions: function(req, res) {
		res.render("submissions", {
			info: entryInfo
		});
	},
	vote: function(req, res) {
		var sample = _.sample(entryInfo, 2);
		console.log("sample:", sample);

		res.render("vote", {
			sample: sample
		});
	}
};

module.exports = indexController;