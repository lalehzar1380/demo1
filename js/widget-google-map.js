(
	function( $ ) {
		'use strict';

		var GoogleMapHandler = function( $scope, $ ) {
			var $element = $scope.find( '.july-google-map' );
			var $map = $element.children( '.map' );

			var height = $map.data( 'height' );

			$map.width( '100%' )
			    .height( height );

			var optionsString = $element.children( '.map-options' ).html();
			var options = false;
			try {
				options = JSON.parse( optionsString );
			} catch ( ex ) {
			}

			if ( options ) {
				var markers = options.marker;
				for (var i = 0; i < markers.length; i++) {
					markers[i]['icon']['scaledSize'] = new google.maps.Size(40, 53);
					markers[i]['icon']['origin'] = new google.maps.Point(0, 0);
					markers[i]['icon']['anchor'] = new google.maps.Point(20, 53);
				}
				// Force disable mouse wheel, draggable in editor mode.
				if ( $( 'body' ).hasClass( 'elementor-editor-active' ) ) {
					options.settings.scrollwheel = false;
					options.settings.draggable = false;
				}

				var overlays = options.overlay;
				var settings = options.settings;

				$map.gmap3( settings )
				    .overlay( overlays );

			}
		};

		$( window ).on( 'elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-google-map.default', GoogleMapHandler );
		} );
	}
)( jQuery );

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */