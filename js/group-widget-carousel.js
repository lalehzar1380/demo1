(
	function( $ ) {
		'use strict';

		var SwiperHandler = function( $scope, $ ) {
			var $element = $scope.find( '.july-slider-widget' );

			$element.JulySwiper();

			$element.removeClass( 'july-grid-loading' );

			if( $element.hasClass( 'product-hover-slider' ) ){
				$element.find( '.grid-item' ).each( function( index ) {
					var gridItem = $( this );
					var w = gridItem.find( '.entry-thumbnail' ).width();
					gridItem.find( '.product-thumbs-slider' ).css( 'width', w );
					gridItem.find( '.product-thumbs-slider' ).JulySwiper();
				});
			}
		};

		var SwiperLinkedHandler = function( $scope, $ ) {
			var $element = $scope.find( '.july-slider-widget' );

			if ( $scope.hasClass( 'july-swiper-linked-yes' ) ) {
				var thumbsSlider = $element.filter( '.july-thumbs-swiper' ).JulySwiper();
				var mainSlider = $element.filter( '.july-main-swiper' ).JulySwiper( {
					thumbs: {
						swiper: thumbsSlider
					}
				} );
			} else {
				$element.JulySwiper();
			}
		};

		$( window ).on( 'elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-image-carousel.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-modern-carousel.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-modern-slider.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-team-member-carousel.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-product-carousel.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-instagran.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-product-categories-carousel.default', SwiperHandler );
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-view-demo-carousel.default', SwiperHandler );

			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-testimonial.default', SwiperLinkedHandler );
		} );
	}
)( jQuery );

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */