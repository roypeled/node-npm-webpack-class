var najax = require("najax");

najax({
	url: 'https://jsonplaceholder.typicode.com/posts/1',
	method: 'GET'
}).success(function(data) {
	console.log(data);
});