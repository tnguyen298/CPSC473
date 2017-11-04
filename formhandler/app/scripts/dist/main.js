(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
  'use strict';

  (function (window) {
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
    console.log(formHandler);
  })(window);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXHNjcmlwdHNcXHNyY1xcbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsQ0FBRSxrQkFBVTtBQUNWLE1BQU0sZ0JBQWdCLDRCQUF0QjtBQUNBLE1BQU0sTUFBTSxPQUFPLEdBQW5CO0FBQ0EsTUFBTSxRQUFRLElBQUksS0FBbEI7QUFDQSxNQUFNLFlBQVksSUFBSSxTQUF0QjtBQUNBLE1BQU0sY0FBYyxJQUFJLFdBQXhCO0FBQ0EsTUFBTSxVQUFVLElBQUksS0FBSixDQUFVLFVBQVYsRUFBc0IsSUFBSSxTQUFKLEVBQXRCLENBQWhCO0FBQ0EsU0FBTyxPQUFQLEdBQWlCLE9BQWpCO0FBQ0EsTUFBTSxjQUFjLElBQUksV0FBSixDQUFnQixhQUFoQixDQUFwQjs7QUFFQSxjQUFZLGdCQUFaLENBQTZCLFFBQVEsV0FBUixDQUFvQixJQUFwQixDQUF5QixPQUF6QixDQUE3QjtBQUNBLFVBQVEsR0FBUixDQUFZLFdBQVo7QUFDRCxDQVpELEVBWUksTUFaSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoKHdpbmRvdyA9PiB7XHJcbiAgY29uc3QgRk9STV9TRUxFQ1RPUiA9ICdbZGF0YS1jb2ZmZWUtb3JkZXI9XCJmb3JtXCJdJztcclxuICBjb25zdCBBcHAgPSB3aW5kb3cuQXBwO1xyXG4gIGNvbnN0IFRydWNrID0gQXBwLlRydWNrO1xyXG4gIGNvbnN0IERhdGFTdG9yZSA9IEFwcC5EYXRhU3RvcmU7XHJcbiAgY29uc3QgRm9ybUhhbmRsZXIgPSBBcHAuRm9ybUhhbmRsZXI7XHJcbiAgY29uc3QgbXlUcnVjayA9IG5ldyBUcnVjaygnbmNjLTE3MDEnLCBuZXcgRGF0YVN0b3JlKCkpO1xyXG4gIHdpbmRvdy5teVRydWNrID0gbXlUcnVjaztcclxuICBjb25zdCBmb3JtSGFuZGxlciA9IG5ldyBGb3JtSGFuZGxlcihGT1JNX1NFTEVDVE9SKTtcclxuXHJcbiAgZm9ybUhhbmRsZXIuYWRkU3VibWl0SGFuZGxlcihteVRydWNrLmNyZWF0ZU9yZGVyLmJpbmQobXlUcnVjaykpO1xyXG4gIGNvbnNvbGUubG9nKGZvcm1IYW5kbGVyKTtcclxufSkpKHdpbmRvdyk7XHJcbiJdfQ==
