var VideoEntry = function (name, url, title, description, votes) {
	this.name = name;
	this.url = url;
	this.title = title;
	this.description = description || "";
	this.votes = votes || 0;
}


var video1 = new VideoEntry("Hyun", "06xF46tIkmA", "Spotlight 3: Twisted Treeline", "Lol");
var video2 = new VideoEntry("Hyun", "CMJo3vaijx4", "Spotlight 4: Final Eclipse", "Lol");
var video3 = new VideoEntry("Philips Lacanlale", "EFioleqDBlM", "B.Y.E", "60 Deaths in 5 minutes");
var video4 = new VideoEntry("oxob3000", "9Grw9lw88c8", "Oxob vs. FoxnQ", "vs");


var entryInfo = [video1, video2, video3, video4];

module.exports = entryInfo;