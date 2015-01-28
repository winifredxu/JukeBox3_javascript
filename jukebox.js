$(document).ready( function() {
$('h1').text("CHANGE");

	$('input[type="submit"]').on('click', function() {
		var sg_name = $('#song_name').val();
		var sg_music = $('#song_music').val();
		var myLi = document.createElement("LI");

		$('#song-queue').append(myLi);
		$(myLi).addClass('list-group-item');
		$(myLi).append('<span>'+sg_name+'</span> <span>'+sg_music+'</span>');

		// hide the last <span> of every song
		//$('ul li span:last-child').hide();
		$(myLi).children().last().hide();

		event.preventDefault();
		$('#song_name').val("");
		$('#song_music').val("");

		//fadeIn/Out song_music on mouse moves
		$(myLi).on('mouseenter', function() {
			$(myLi).children().last().fadeIn();
		});
		$(myLi).on('mouseleave', function() {
			$(myLi).children().last().fadeOut();
		});
	});

	$(document).on('keypress', function(event) {
	  if (event.which == 32) { //spacebar is 32
	    //String.fromCharCode(32);
	    playFirstSong();
	  };
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
	var tmpLi = $('ul li:first-child');

	if ( tmpLi.text() != "" ) {
		var sg_name = tmpLi.children().first().text();
		var sg_music = tmpLi.children().last().text();

		//change the user-msg & PLAY button appearance
		$('#user-msg').html("Now playing: "+sg_name);
		$('#play-button').attr('disabled', true);
		$('#play-button').html("Playing...");
		$('#play-button').slideUp();
//		playSong(parseSong(song), 400, changeDisplay );
		playSong(parseSong(sg_music), 400, playFirstSong );
		$('li:first-child').remove(); //remove the song from list queue

	} else {
		changeDisplay();
	};
};

/*
C*6 B*3 A*5 D*4
A C*5 D*10 B*6
A A A 

F#*1 F#*1 D*1 B*3 B*1 E*2 E*1 E*1 G#*1 G#*1 A*1 B*1 A*1 A*1 A*1 E*1 E*1 F#*2 F#*1 E*1 E*1 F#*1 E*1 D*1 D*1 C#*1 B*1 C#*1 C#*1

A*1 D*1 A*1 D*1 A*1 C*1 A*1 C*1 C*1 E*3 E*1 D*1 E*1 F*1 D*3 A*1 D*1 A*1 D*1 A*1 C*1 A*1 C*1 C*1 E*3 E*1 D*1 E*1 F*1 D*3 D*1 D*1 D*1 C*1 A*1 D*1 D*1 D*1 C*1 A*1 C*1 C*1 C*1 A#*1 A*1 F*1 */