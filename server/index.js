const express = require('express');
let app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log('serving post request');
  res.status(201).end()
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('serving get request');
  res.status(200).send('hello world')
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

