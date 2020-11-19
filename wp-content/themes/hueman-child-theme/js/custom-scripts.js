// Custom scripts file

jQuery( document ).ready(function( $ ) {

  'use strict';

var playCounter = 0;
var textCounter = 1;

var $video1 = $("#video1");
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
  playCounter ++;
  textCounter ++;
  if($('#infographicPrev').css('visibility') == 'hidden'){
    $('#infographicPrev').addClass("m-fadeIn");
  }
  $('#video'+playCounter)[0].play();
  timerID = window.setInterval(function() {
    drawImage($('#video'+playCounter)[0]);
  }, 30);
  $('.aos-infographic__display').animate({'opacity': 0}, 1000, function () {
    $(this).html($('#infographic__text'+textCounter).html());
  }).animate({'opacity': 1}, 1000);
});

$('#infographicPrev').click(function(event) {
  event.preventDefault();
  stopTimer();
  textCounter --;
  var video = $('#video'+playCounter)[0];
  video.playbackRate = 1.0;
  var intervalRewind = setInterval(function(){
         video.playbackRate = 1.0;
         if(video.currentTime == 0){
             clearInterval(intervalRewind);
             video.pause();
         }
         else{
             video.currentTime += -.1;
         }
  },100);
  timerID = window.setInterval(function() {
    drawImage(video);
  }, 100);
  playCounter --;
  $('.aos-infographic__display').animate({'opacity': 0}, 1000, function () {
    $(this).html($('#infographic__text'+textCounter).html());
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

});