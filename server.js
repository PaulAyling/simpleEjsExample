const express = require('express');
var path = require('path');
const app = express();

app.get('/', function (req, res) {
	res.sendFile('static.html', { root: path.join(__dirname, './staticHtml') });
});

app.listen(process.env.PORT || 5000);
