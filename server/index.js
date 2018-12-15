const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var helpers = require('../helpers/github.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  console.log('serving post request');
  helpers.getReposByUsername(req.body.username, (data) => {
    let repos = JSON.parse(data);
    console.log(repos[0])
  })
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

