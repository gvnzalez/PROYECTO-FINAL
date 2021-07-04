const { MongoClient } = require('mongodb');
const url = "mongodb+srv://gvnzalez:Andres9876@cluster0.u6xug.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true});

let pets;

function connect(callback) {
  client.connect(err => {
    console.log('MongoDB connected!');
    pets = client.db("PETS").collection("pets");
    return callback(err);
  });
}

function disconnect(callback) {
  client.close();
  callback();
}

function getPetsCollection() {
  return pets;
}

module.exports = {
  connect,
  disconnect,
  getPetsCollection,
};