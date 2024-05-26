(
	function( $ ) {
		'use strict';
		var JulyBannerHandler = function( $scope, $ ) {
			$('.july-banner').on('mouseover', function(e) {
				if( $(this).find('.elementor-video').length > 0 ) {
					$(this).find('.elementor-video')[0].play();
				}
			}).on('mouseout', function(e) {
				if( $(this).find('.elementor-video').length > 0 ) {
					$(this).find('.elementor-video')[0].pause();
				}
			});
		};

		$( window ).on( 'elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-banner.default', JulyBannerHandler );
		} );
	}
)( jQuery );

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */