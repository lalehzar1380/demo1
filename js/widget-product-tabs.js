(
	function( $ ) {
		'use strict';

		var JulyProductTabsHandler = function( $scope, $ ) {

			var ajax_url = theme_vars.ajax_url;

			$( '.elementor-editor-active .nice-select' ).niceSelect();
			$( '.product-tabs-content' ).each( function() {
				var w = $( this ).find( '.grid-item .entry-thumbnail' ).width();
				$( this ).find( '.product-thumbs-slider' ).css( 'width', w );
			});
			$( '.elementor-editor-active .july-swiper-slider' ).JulySwiper();

			if( $( '.product-tabs-content' ).hasClass( 'product-hover-slider' ) ){
				$( '.product-tabs-content' ).find( '.grid-item' ).each( function( index ) {
					var gridItem = $( this );
					var w = gridItem.find( '.entry-thumbnail' ).width();
					gridItem.find( '.product-thumbs-slider' ).css( 'width', w );
					gridItem.find( '.product-thumbs-slider' ).JulySwiper();
				});
			}

			$( '.product-tabs-wrapper' ).on( 'click', '.filter-item, .product-tabs-filter .list .option', function(e) {
				e.preventDefault();
				var _this 		= $( this ),
					tabs		= _this.closest( '.product-tabs-wrapper' ),
					tabslayout 	= tabs.data( 'tabslayout' ),
					productcardlayout 		= tabs.data( 'productcardlayout' ),
					productcardhover 		= tabs.data( 'productcardhover' ),
					productcardiconlayout 	= tabs.data( 'productcardiconlayout' ),
					productcardprice 		= tabs.data( 'productcardprice' ),
					productcardvariation 	= tabs.data( 'productcardvariation' ),
					productcardwishlist 	= tabs.data( 'productcardwishlist' ),
					productcardcompare 		= tabs.data( 'productcardcompare' ),
					productcardquickview 	= tabs.data( 'productcardquickview' ),
					numberposts = tabs.data( 'numberposts' ),
					filter      = '',
					typefilter 	= '',
					value 		= '',
					slider_wrap = '',
					lg_items 	= '',
					md_items 	= '',
					sm_items 	= '',
					lg_gutter 	= '',
					md_gutter 	= '',
					sm_gutter 	= '',
					loop 		= '',
					centered 	= '',
					nav 		= '',
					pagination 	= '',
					scrollbar 	= '',
					percolumn 	= '',
					showpercolumn = '',
					classes 	= '';

					slider_wrap	= tabs.find( '.july-swiper-slider:first-child' );
					lg_items	= slider_wrap.data( 'lg-items' );
					md_items	= slider_wrap.data( 'md-items' );
					sm_items	= slider_wrap.data( 'sm-items' );
					lg_gutter	= slider_wrap.data( 'lg-gutter' );
					md_gutter	= slider_wrap.data( 'md-gutter' );
					sm_gutter	= slider_wrap.data( 'sm-gutter' );
					loop		= slider_wrap.data( 'loop' );
					centered	= slider_wrap.data( 'centered' );
					nav			= slider_wrap.data( 'nav' );
					pagination	= slider_wrap.data( 'pagination' );
					scrollbar	= slider_wrap.data( 'scrollbar' );
					scrollbar	= slider_wrap.data( 'scrollbar' );
					showpercolumn	= slider_wrap.data( 'showpercolumn' );
					percolumn	= slider_wrap.data( 'percolumn' );
					classes		= slider_wrap.attr("class");

				if( _this.data( 'filter' ) ){
					filter 		= _this.data( 'filter' );
				} else {
					value 		= _this.data( 'value' );
					filter 		= $( '#product-tabs-nav option[value="' + value + '"]' ).val();
				}

				if( _this.data( 'typefilter' ) ){
					typefilter 	= _this.data( 'typefilter' );
				} else {
					value 		= _this.data( 'value' );
					typefilter 	= $( '#product-tabs-nav option[value="' + value + '"]' ).data( 'typefilter' );
				}

				if( tabs.find( '.' + filter ).children().length > 0 ){
					tabs.find( '.filter-item' ).removeClass( 'is-active' );
					_this.addClass( 'is-active' );
					tabs.find( '.tabs-item' ).parent().removeClass( 'is-active' );
					tabs.find( '.' + filter ).parent().addClass( 'is-active' );
				} else {
					$.ajax({
						url: ajax_url,
						type: 'POST',
						cache: false,
						dataType: 'html',
						data: {
							filter: filter,
							typefilter: typefilter,
							tabslayout: tabslayout,
							productcardlayout: productcardlayout,
							productcardhover: productcardhover,
							productcardiconlayout: productcardiconlayout,
							productcardprice: productcardprice,
							productcardvariation: productcardvariation,
							productcardwishlist: productcardwishlist,
							productcardcompare: productcardcompare,
							productcardquickview: productcardquickview,
							numberposts: numberposts,
							lg_items: lg_items,
							md_items: md_items,
							sm_items: sm_items,
							lg_gutter: lg_gutter,
							md_gutter: md_gutter,
							sm_gutter: sm_gutter,
							loop: loop,
							centered: centered,
							nav: nav,
							pagination: pagination,
							scrollbar: scrollbar,
							showpercolumn: showpercolumn,
							percolumn: percolumn,
							classes: classes,
							action: 'get_widget_product_tabs',
						},
						beforeSend: function () {
							tabs.find( '.grid-item' ).addClass("july-skeleton-loading");
						},
						success: function(data) {
							tabs.find( '.' + filter ).html(data);
							tabs.find( '.filter-item' ).removeClass( 'is-active' );
							_this.addClass( 'is-active' );
							tabs.find( '.tabs-item' ).parent().removeClass( 'is-active' );
							tabs.find( '.' + filter ).parent().addClass( 'is-active' );
							$( '.product-tabs-content' ).each( function() {
								var w = $( this ).find( '.grid-item .entry-thumbnail' ).width();
								$( this ).find( '.product-thumbs-slider' ).css( 'width', w );
							});
							tabs.find( '.july-swiper-slider' ).JulySwiper();
							tabs.find( '.grid-item' ).removeClass("july-skeleton-loading");
						}
					});
				}
			});

			if( $( '.elementor-widget-july-product-tabs .product-tabs-filter' ).hasClass( 'layout-03' ) ){
				function activeTab(obj)
				{
					$('.product-tabs-filter .filter-item').removeClass('active');
					var id = $(obj).attr('href');
					var href = 'a[href = "' + id + '"]';

					$(href).addClass('active');
					$('.image-categories-tab a').hide();
					$(id).show();

					console.log(href);
				}
				$('.product-tabs-filter .filter-item').click(function(){
					activeTab(this);
				});
				activeTab($('.product-tabs-filter .filter-item:first-child'));
			}
		};

		$( window ).on( 'elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction( 'frontend/element_ready/july-product-tabs.default', JulyProductTabsHandler );
		} );
	}
)( jQuery );

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */