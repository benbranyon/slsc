<?php
/* Write your awesome functions below */

function custom_scripts() {
	wp_enqueue_style( 'aos-styles', get_stylesheet_directory_uri() . '/css/aos.css' );
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/js/custom-scripts.js', array( 'jquery' ));
}
add_action( 'wp_enqueue_scripts', 'custom_scripts', 99 );