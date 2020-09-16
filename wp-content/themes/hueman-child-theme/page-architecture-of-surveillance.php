<?php 
/*
Template Name: Architecture of Surveillance
Template Post Type: page
*/

get_header(); ?>

<div class="content">
	<h1><?php the_title(); ?></h1>
	<div class="aos-infographic">
		<div class="aos-infographic__info">
			<h2>Trapwire</h2>
			<ul>
				<li>Street camera style surveillance system– more accurate than modern facial recognition technology</li>
				<li>Every few seconds, data picked up at surveillance points are recorded digitally on the spot, then encrypted and instantaneously delivered to a fortified central database center at an undisclosed location to be aggregated with other intelligence.</li>
				<li>Documents have revealed that LAPD has invested heavily in this.</li>
			</ul>
			<div>
				<a href="#" class="button" id="infographicPrev">Prev</a>
				<a href="#" class="button" id="infographicNext">Next</a>
			</div>
		</div>
		<div class="aos-infographic__animation">
			<div class="video-consainer">
				<img id="source" src="/wp-content/themes/hueman-child-theme/assets/images/loading.png" width="1280" height="720">
			    <video id="video1" width="1280" height="720">
			      <source src="/wp-content/themes/hueman-child-theme/assets/videos/2nd-rising.mp4" type="video/mp4"/>
			      <source src="/wp-content/themes/hueman-child-theme/assets/videos/2nd-rising.webm" type="video/webm" />
			    </video>
			    <video id="video2" width="1280" height="720">
			    	<source src="/wp-content/themes/hueman-child-theme/assets/videos/2nd-Lowering.mp4" type="video/mp4"/>
			    </video>
			</div>
		    <canvas id="videoCanvas" width="1280" height="720"></canvas> 
		</div>
	</div>
</div>

<?php get_footer(); ?>