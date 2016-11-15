module.exports = {
	entry: "./nameJquery.js",
	output: {
		path: "./",
		filename: "app.js"
	},

	module: {
		loaders: [
			{
				test: /hb.html$/, 
				loader: "handlebars-loader"
			},
			{
				test: /\.css$/,
				loaders: ["style", "css"]
			}
		]
	},
	
	devtool: "source-map"
};