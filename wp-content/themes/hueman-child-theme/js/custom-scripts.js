// Custom scripts file

jQuery( document ).ready(function( $ ) {

  'use strict';

  $('#infographicNext').click(function(e) {
  	e.preventDefault();
  	var video = $('.infographic-video')[0];
  	video.src = "/wp-content/themes/hueman-child-theme/assets/videos/2nd-rising.mp4";
  	video.load();
	video.play();
  });

  $('#infographicPrev').click(function(e) {
  	e.preventDefault();
  	var video = $('.infographic-video')[0];
  	video.src = "/wp-content/themes/hueman-child-theme/assets/videos/2nd-Lowering.mp4";
  	video.load();
	video.play();
  });

});