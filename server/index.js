const express = require('express');
let app = express();
var bodyParser = require('body-parser');
var helpers = require('../helpers/github.js')
var db = require('../database')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/repos', function (req, res) {
  console.log('serving post request');
  helpers.getReposByUsername(req.body.username, (data) => {
    let repos = JSON.parse(data);
    db.save(repos, (error) => {
      if (error) {
        console.log(error)
        res.status(404).end();
      } else {
        console.log('success writting data!')
        res.status(201).end();
      }
    })
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  console.log('serving get request');
  db.find((err, repos) => {
    if (err) {
      res.status(500).send({ error: 'something blew up' });
    } else{
      let top25 = repos.slice(0, 25);
      res.status(200).send(JSON.stringify(top25));
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

