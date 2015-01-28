$(document).ready( function() {
//$('h1').text("CHANGE");

	$('input[type="submit"]').on('click', function() {
		var song_name = $('input[type="text"]').val();
		$('#song-queue').append('<li class="list-group-item">'+song_name+'</li>');
		event.preventDefault();
		$('input[type="text"').val('');
	});

	$('#play-button').on('click', playFirstSong );

});

var changeDisplay = function() {
	$('li:first-child').remove(); //remove the song from list queue
	$('#play-button').slideDown();
	$('#play-button').attr('disabled', false);
	$('#play-button').html("Play");
};

var playFirstSong = function() {
	$('#play-button').slideUp();
	var song = $('ul li:first-child').text();
	if ( song != "" ) {
		//change the PLAY button appearance
		$('#play-button').attr('disabled', true);
		$('#play-button').html("Playing...");
//		playSong(parseSong(song), 400, changeDisplay );
		playSong(parseSong(song), 400, playFirstSong );
		changeDisplay();
	};
};

/*
C*6 B*3 A*5 D*4
A C*5 D*10 B*6
A A A 
 */