const express = require('express');
var path = require('path');
const app = express();

//make the directory below accessable form the script in html
app.use('/images', express.static(__dirname + '/images'))

app.get('/', function (req, res) {
	res.sendFile('static.html', { root: path.join(__dirname, './staticHtml') });
});

app.listen(process.env.PORT || 5000);
