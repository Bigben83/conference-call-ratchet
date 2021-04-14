/* AUXILIARY MEHTODS */

function waitTime(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

function autoMute() {
	session.on('publisherStartSpeaking', (event) => {
		console.log('Publisher ' + event.connection.connectionId + ' start speaking');
    	setTimeout(function () {
        	muteAudio();
        	console.log('Muting Audio automatically after 5min');
    	}, 50000);
	});
}

function muteAudio() {
	audioEnabled = !audioEnabled;
	publisher.publishAudio(audioEnabled);
	if (!audioEnabled) {
		$('#mute-audio').removeClass('btn-success');
		$('#mute-audio').addClass('btn-danger');
		$('#audio-icons').removeClass('fas fa-microphone fa-8x px-3 m-3');
		$('#audio-icons').addClass('fas fa-microphone-slash fa-6x py-3 m-3');
	} else {
		$('#mute-audio').addClass('btn-success');
		$('#mute-audio').removeClass('btn-danger');
		$('#audio-icons').removeClass('fas fa-microphone-slash fa-6x py-3 m-3');
		$('#audio-icons').addClass('fas fa-microphone fa-8x px-3 m-3');
		//$('#change-icons').toggleClass('fa-microphone-slash ');
	}
}

function muteVideo() {
	videoEnabled = !videoEnabled;
	publisher.publishVideo(videoEnabled);

	if (!videoEnabled) {
    	$('#mute-video').removeClass('btn-success');
    	$('#mute-video').addClass('btn-danger');
		$('#video-icons').removeClass('fas fa-video fa-2x py-2 m-1');
		$('#video-icons').addClass('fas fa-video-slash fa-2x py-2 m-1');
	} else {
		$('#mute-video').addClass('btn-success');
    	$('#mute-video').removeClass('btn-danger');
    	$('#video-icons').removeClass('fas fa-video-slash fa-2x py-2 m-1');
		$('#video-icons').addClass('fas fa-video fa-2x py-2 m-1');
	}
}

// Door bell for call all participants
function activateBell() {
	$('#ringDB').addClass('text-danger');
}
function deactivateBell() {
}
function doorbell() {
	setTimeout(function () {
    	$('#ringDB').removeClass('text-danger');
    	$('#ringDB').addClass('faa-ring animated text-success');	
    }, 2000);
	activateBell();
	setTimeout(function () {
        deactivateBell();
    	$('#ringDB').removeClass('faa-ring animated text-success');
    }, 5000);	
}