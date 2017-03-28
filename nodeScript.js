#!/usr/bin/env node
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://tiffanypan:<tiffany96>@fontcloud-shard-00-00-qvssg.mongodb.net:27017,fontcloud-shard-00-01-qvssg.mongodb.net:27017,fontcloud-shard-00-02-qvssg.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=FontCloud-shard-0&authSource=admin';

/*
var insertDocument = function(db, callback) {
   db.collection('fonts').insertOne( {
     "font_id": ObjectId(),
     "font_name": "Helvetica",
     "file": "helvetica.file",
     "web": "https://fontaddress.com",
     "preview": "http://preview.it"
   }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};
*/

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
