const express = require('express');
const { request } = require('http');
var path = require('path');
const app = express();

//make the directory below accessable form the script in html
app.use('/images', express.static(__dirname + '/images'));

//Static page in the root
app.get('/', function (req, res) {
	res.sendFile('static.html', { root: path.join(__dirname, './staticHtml') });
});
//second page in its own url
app.get('/about', function (req, res) {
	res.sendFile('about.html', { root: path.join(__dirname, './staticHtml') });
});

//EJS CODE: Static
//(it know that templates are in /views)
app.set('view engine', 'ejs');
app.get('/ejs/static', function (req, res) {
	res.render('static');
});
//EJS CODE: dynamic
app.get('/ejs/:userQuery', (req, res) => {
	res.render('dynamic', { data: { userQuery: req.params.userQuery } });
});
//EJS CODE: dynamic with extra variables
app.get('/ejs/dynamicAddedVariables/:userQuery', (req, res) => {
	res.render('dynamicAddedVariables', {
		data: { userQuery: req.params.userQuery, searchResults: ['book1', 'book2', 'book3'] },
	});
});

app.listen(process.env.PORT || 5000);
