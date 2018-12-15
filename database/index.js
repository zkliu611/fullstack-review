const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost//27017');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('CONNECTED')});

var repoSchema = mongoose.Schema({
  id: Number,
  owner: {
    login: String,
    avatar: String,
  },
  name: String,
  description: String,
  createdAt: Date,
  updatedAt: Date,
  forks: Number,
  watch: Number,
});

var Repo = mongoose.model('Repo', repoSchema);

var save = (data) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  console.log(data);

}

module.exports.save = save;