"use strict";

$('.container').on('click', 'i.fa', function() {
  $('i.fa').removeClass('fa-pause').addClass('fa-play');

  $(this).removeClass('fa-play').addClass('fa-pause');
});

$('.container').on('click', 'i.fa-pause', function() {
  $(this).removeClass('fa-pause').addClass('fa-play');
});
