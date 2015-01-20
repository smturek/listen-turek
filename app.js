"use strict";

var cover = document.getElementsByTagName("audio")[0];
// var zanarkand = document.getElementsByTagName("audio")[1];
// var morning = document.getElementsByTagName("audio")[2];
// var aerith = document.getElementsByTagName("audio")[3];

$('.container').on('click', 'i.fa', function() {
  $('i.fa').removeClass('fa-pause').addClass('fa-play');

  $(this).removeClass('fa-play').addClass('fa-pause');
});

$('.container').on('click', 'i.fa-pause', function() {
  $(this).removeClass('fa-pause').addClass('fa-play');
});

$('.cover').on("click", function() {
  cover.load();
  cover.play();
});
