const express = require('express');
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

//EJS CODE (it know that templates are in /views)
app.set('view engine', 'ejs');
app.get('/ejs', function (req, res) {
	res.render('index');
});

app.listen(process.env.PORT || 5000);
