jQuery(function($) {
	var audioSupp = !!document.createElement('audio').canPlayType;
	if(audioSupp) { //if audio support is available
		// alert("audio support available!");
		var index = 0, playing = false,
		mediaPath = 'media/', extension = '';
		var tracks = [
			{"name":"Lateralus", "artist":"Tool"},
			{"name":"Soothsayer", "artist":"Buckethead"},
			{"name":"Black Star (live)", "artist":"Malmsteen"}
		], // This will be a dynamically generated JSON later on.
		trackCount = tracks.length;
		// set up events on the audio player
		var audio = $("#player").bind('play', function() {
			playing = true;
			// alert("playing!");
		}).bind('pause', function() {
			playing = false;
			// alert("paused!");
		}).bind('end', function() {
			playing = false;
			// alert("ended!");
		}).get(0);
		$("#list li").click(function() {
			var id = parseInt($(this).index());
			if(id !== index) {
				playTrack(id);
			}
		});
		var loadTrack = function(id) {
			index = id;
			audio.src = mediaPath + tracks[id].artist + '-' + tracks[id].name + extension;
		}
		var playTrack = function(id) {
			loadTrack(id);
			audio.play();
		};
		if(audio.canPlayType('audio/ogg')) {
			extension = '.ogg';
		} if (audio.canPlayType('audio/mp3')) {
			extension = '.mp3';
		}
	}
});
