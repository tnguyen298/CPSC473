(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;
  var dpd = [];

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error('No remote URL supplied.');
    }
    this.serverUrl = url;
  }
  RemoteDataStore.prototype.add = function (val, email) {
    dpd.coffeeorders.post({coffee: val, emailAddress: email}), function(todo) {
      console.log(todo);
    }, function (err) {
      console.log(err);
    };
  };

  RemoteDataStore.prototype.getAll = function(cb) {
    dpd.coffeeorders.get({}, function (results, error) {
      if (cb) {
        console.log(error);
        cb(error);
      }
    });
  };

  RemoteDataStore.prototype.get = function(email, cb) {
    dpd.coffeeorders.get({emailAddress: email}, function(results, error) {
      if (cb) {
        console.log(error);
        cb(error);
      }
    });
  };

  RemoteDataStore.prototype.remove = function(email, cb) {
    dpd.coffeeorders.del({emailAddress: email}, function(results, error) {
      if (cb) {
        console.log(error);
        cb(error);
      }
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;
}) (window);
