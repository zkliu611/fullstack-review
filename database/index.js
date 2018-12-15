const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost//27017');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('CONNECTED')});

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
  
  for (let i = 0; i < data.length; i++) {
    let repo = new Repo({
      id: data[i].id,
      owner: data[i].owner.login,
      description: data.description,
      url: data[i].html_url,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
      forks: data.forks,
      watch: data.watchers,
    })

    repo.save(function(error) {
      if (error) {
        callback(error)
      } else {
        console.log('repo saved!')
      }
    })
  }

}

module.exports.save = save;