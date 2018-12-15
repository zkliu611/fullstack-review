const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', (err) => {
  if (err) return console.log('Error: no connection to database.');
  console.log('Connected to database!')
});

var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {console.log('CONNECTED')});

var repoSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  owner: String,
  name: String,
  description: String,
  url: String,
  createdAt: String,
  updatedAt: String,
  forks: Number,
  watch: Number,
});

var Repo = mongoose.model('Repo', repoSchema);

var save = (data, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log(Object.keys(data[0]));
  for (let i = 0; i < data.length; i++) {
    let repo = new Repo({
      id: data[i].id,
      owner: data[i].owner.login,
      name: data[i].name,
      description: data[i].description,
      url: data[i].html_url,
      createdAt: data[i].created_at,
      updatedAt: data[i].updated_at,
      forks: data[i].forks,
      watch: data[i].watchers,
    })

    repo.save(function(error) {
      if (error) {
        callback(error)
      } else {
        console.log('repo saved!');
        callback();
      }
    })
  }

}

module.exports.save = save;