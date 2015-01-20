"use strict";

var song1 = document.getElementsByTagName("audio")[0];

$('.container').on('click', 'i.fa', function() {
  $('i.fa').removeClass('fa-pause').addClass('fa-play');

  $(this).removeClass('fa-play').addClass('fa-pause');
});

$('.container').on('click', 'i.fa-pause', function() {
  $(this).removeClass('fa-pause').addClass('fa-play');
});

$('.song').on("click", function() {
  song1.load();
  song1.play();
});
