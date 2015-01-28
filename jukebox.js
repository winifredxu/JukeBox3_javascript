$(document).ready( function() {

//$('h1').text("CHANGE");

	$('input[type="submit"]').on('click', function() {
		var song_name = $('input[type="text"]').val();
		$('#song-queue').append('<li class="list-group-item">'+song_name+'</li>');
		event.preventDefault();
		$('input[type="text"').val('');
	});

});