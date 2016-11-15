var getName = require("./nameGetter");
var $ = require("jquery");
var template = require("./title.hb.html");
var name = getName();
var compiledTempalte = template(name);

require("./style.css");

$(document.body)
	.append( compiledTempalte )
	.hide()
	.show(5000);