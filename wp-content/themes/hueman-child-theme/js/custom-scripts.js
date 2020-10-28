// Custom scripts file

jQuery( document ).ready(function( $ ) {

  'use strict';

var playCounter = 0;
var clipArray = [];

var $video1 = $("#video1");
var $video2 = $("#video2");
var $text1 = $('#infographic__text1');
var $text2 = $('#infographic__text2');
var image = $('#source');

var timerID;

var $canvas = $("#videoCanvas");
var ctx = $canvas[0].getContext("2d");

function stopTimer() {
  window.clearInterval(timerID);
}

$('.aos-infographic__display').animate({'opacity': 0}, 1000, function () {
  $(this).html($text1.html());
}).animate({'opacity': 1}, 1000);

$('#infographicNext').click(function(event) {
  event.preventDefault();
  stopTimer();
  playCounter = 0;
  clipArray = [];

  // addd element to the end of the array
  clipArray.push(1);
  for (var i = 0; i < playCounter; i++) {
    clipArray.push(2);
  }
  clipArray.push(3);

  $video2[0].load();

  $video1[0].play();
  $('.aos-infographic__display').animate({'opacity': 0}, 1000, function () {
    $(this).html($text2.html());
  }).animate({'opacity': 1}, 1000);
});

$('#infographicPrev').click(function(event) {
  event.preventDefault();
  stopTimer();
  playCounter = 0;
  clipArray = [];

  // addd element to the end of the array
  clipArray.push(1);
  for (var i = 0; i < playCounter; i++) {
    clipArray.push(2);
  }
  clipArray.push(3);

  $video1[0].load();

  $video2[0].play();
  $('.aos-infographic__display').animate({'opacity': 0}, 1000, function () {
    $(this).html($text1.html());
  }).animate({'opacity': 1}, 1000);
});

function drawImage(video) {
  //last 2 params are video width and height
  ctx.drawImage(video, 0, 0, 1280, 720);
}

// copy the 1st video frame to canvas as soon as it is loaded
$video1.one("loadeddata", function() {
  drawImage(image[0]);
});

// copy video frame to canvas every 30 milliseconds
$video1.on("play", function() {
  timerID = window.setInterval(function() {
    drawImage($video1[0]);
  }, 30);
});
$video2.on("play", function() {
  timerID = window.setInterval(function() {
    drawImage($video2[0]);
  }, 30);
});

function onVideoEnd() {
  //stop copying frames to canvas for the current video element
  stopTimer();

  // remove 1st element of the array
  clipArray.shift();

  //IE fix
  if (!this.paused) this.pause();

  if (clipArray.length > 0) {
    if (clipArray[0] === 1) {
      $video1[0].play();
    }
    if (clipArray[0] === 2) {
      $video2[0].play();
    }
  } else {
    // in case of last video, make sure to load 1st video so that it would start from the 1st frame 
    $video1[0].load();
  }
}

$video1.on("ended", onVideoEnd);
$video2.on("ended", onVideoEnd);

});