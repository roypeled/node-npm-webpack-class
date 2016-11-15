var getName = require("./nameGetter");
var myjquery = require("jquery");

myjquery(document.body)
	.append("<h1>Hello " + getName() + "</h1>")
	.css({
		background: "springgreen",
		color: "blue",
		padding: "50px",
		fontSize: "50px"
	})
	.hide()
	.show(5000);