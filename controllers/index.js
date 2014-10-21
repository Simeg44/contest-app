var entryInfo = require("../models/videos.js");
var _ = require("underscore");

var indexController = {
	index: function(req, res) {
		res.render('index', {
			entries: entryInfo.length
		});
	},
	submissions: function(req, res) {
		var sorted = _.sortBy(entryInfo, function(entry) {
			return entry.votes;
		}).reverse();
		
		res.render("submissions", {
			info: sorted
		});
	},
	vote: function(req, res) {
		var sample = _.sample(entryInfo, 2);
		var place = 0;
		console.log("sample:", sample);

		res.render("vote", {
			sample: sample
		});
	}
};

module.exports = indexController;