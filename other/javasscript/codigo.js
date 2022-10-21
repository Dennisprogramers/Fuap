function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.0; //Changed this to 0.5 or 50% volume since the function is called Set Half Volume ;)
	$("audio.mp3").each(function(i,audio){audio.stop()});
}
function vajarElvolumenDelvideo() {

	var myvideo = document.getElementById("video1")
	myvideo.volume = 0.2;
	$("video.mp4").each(function(i,audio){audio.stop()});
}