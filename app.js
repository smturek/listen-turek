"use strict";

var hours = document.getElementsByTagName("audio")[0];
var friends = document.getElementsByTagName("audio")[1];
var time = document.getElementsByTagName("audio")[2];
var touka = document.getElementsByTagName("audio")[3];

var pause = function() {
  hours.pause();
  friends.pause();
  time.pause();
  touka.pause();
};

$.getJSON('tracks.json', function(tracks) {
  var $tracksTemplate = $('[data-template=tracks]').html();

  var newHTML = Mustache.to_html($tracksTemplate, tracks);

  $('.container').html(newHTML);
});

$('.container').on('click', 'i.fa', function() {
  $('i.fa').removeClass('fa-stop').addClass('fa-play');

  $(this).removeClass('fa-play').addClass('fa-stop');
});

$('.container').on('click', 'i.fa-stop', function() {
  $(this).removeClass('fa-stop').addClass('fa-play');
});

$('.hours').on("click", 'i.fa-play', function() {
  hours.load();
  pause();
  hours.play();
});

$('.friends').on("click", 'i.fa-play', function() {
  friends.load();
  pause();
  friends.play();
});

$('.time').on("click", 'i.fa-play', function() {
  time.load();
  pause();
  time.play();
});

$('.touka').on("click", 'i.fa-play', function() {
  touka.load();
  pause();
  touka.play();
});
