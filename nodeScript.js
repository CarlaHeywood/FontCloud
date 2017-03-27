#!/usr/bin/env node
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017';

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

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
