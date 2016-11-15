var getName = require("./nameGetter");
var $ = require("jquery");
var template = require("./title.hb.html");
var name = getName();
var compiledTempalte = template(name);

var style = require("./style.css");

$(document.body)
	.append( compiledTempalte )
	.css({
		background: "springgreen",
		color: "blue",
		padding: "50px",
		fontSize: "50px"
	})
	.hide()
	.show(5000);