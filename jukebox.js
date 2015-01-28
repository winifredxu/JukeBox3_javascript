$(document).ready( function() {
//$('h1').text("CHANGE");

	$('input[type="submit"]').on('click', function() {
		var song_name = $('#song_name').val();
		var song_music = $('#song_music').val();

		$('#song-queue').append('<li class="list-group-item">'+song_name+': '+song_music+'</li>');
		event.preventDefault();
		$('#song_name').val("");
		$('#song_music').val("");

		//fadeIn song_music on mouseenter
/*		$('li').on('mouseenter', function() {
			$(this).append(": "+song_music);
		});
*/
	});

	$('#play-button').on('click', playFirstSong );

});

var changeDisplay = function() {
	$('#play-button').slideDown();
	$('#play-button').attr('disabled', false);
	$('#play-button').html("Play");
	$('#user-msg').html("Enter a song to play");
};

var playFirstSong = function() {
	var song = $('ul li:first-child').text();
	if ( song != "" ) {
		song = song.split(":");
		//change the user-msg & PLAY button appearance
		$('#user-msg').html("Now playing: "+song[0]);
		$('#play-button').attr('disabled', true);
		$('#play-button').html("Playing...");
		$('#play-button').slideUp();
//		playSong(parseSong(song), 400, changeDisplay );
		playSong(parseSong(song[1]), 400, playFirstSong );
		$('li:first-child').remove(); //remove the song from list queue

	} else {
		changeDisplay();
	};
};

/*
C*6 B*3 A*5 D*4
A C*5 D*10 B*6
A A A 
 */