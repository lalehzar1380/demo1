jQuery(document).ready(function ($) {
	// Open Popup, Panel
	$('.delivery-return-button').on('click', function (e) {
		e.preventDefault();
		var body = $( this ).closest( 'body' );
		var size_guide_modal = $( this ).closest( 'body' ).find( '.delivery-return-modal' );
		body.addClass( 'modal-open' );
		size_guide_modal.addClass( 'is-open' );
	});

	// Close Popup, Panel
	$('.button-close, .bg-overlay').on('click', function (e) {
		e.preventDefault();
		var body = $( this ).closest( 'body' );
		var size_guide_modal = $( this ).closest( '.delivery-return-modal' );
		body.removeClass( 'modal-open' );
		size_guide_modal.removeClass( 'is-open' );
	});
});
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */