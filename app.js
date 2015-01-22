"use strict";
$.getJSON('tracks.json', function(tracks) {
  setTimeout(function() {
    var $tracksTemplate = $('[data-template=tracks]').html();

    var newHTML = Mustache.to_html($tracksTemplate, tracks);

    $('.container').html(newHTML);
  }, 1000)

});

$('.container').on('click', 'i.fa', function() {
  $('i.fa').removeClass('fa-stop').addClass('fa-play');
  $(this).removeClass('fa-play').addClass('fa-stop');

  var track = $(this).data("track");

  $('.runner').text("Now Playing: " + track)

  var id = $(this).data("id");
  var audioTag = document.getElementById(id);

  $('audio').each(function() {
    this.pause();
  });

  audioTag.load();
  audioTag.play();
});

$('.container').on('click', 'i.fa-stop', function() {
  $(this).removeClass('fa-stop').addClass('fa-play');

  $('audio').each(function() {
    this.pause();
  });

  $('.runner').text("Select a Song!")

});
