(
	function( $ ) {
		'use strict';

		var JulyProductHandler = function( $scope, $ ) {

			$( '.elementor-editor-active .nice-select' ).niceSelect();

			var $element = $scope.find( '.july-grid-wrapper' );

			$element.JulyGridLayout();

		};

		$( window ).on( 'elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-product.default', JulyProductHandler );
		} );
	}
)( jQuery );

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */