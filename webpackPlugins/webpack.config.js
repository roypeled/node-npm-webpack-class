var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/nameJquery.js",
	output: {
		path: "./dist",
		filename: "bundle.js"
	},

	module: {
		loaders: [
			{test: /\.hb\.html$/, loader: "handlebars-loader"},
			{test: /\.css$/, loaders: ["style", "css"]}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/name.html"
		})
	],

	devtool: "source-map"
};