var count;
var time;
var counter;
var videoID = "Dr3STRBtTp0";
var player;
var pauseIn;
$(window).load(function() {

	var query = get_query();
	pauseIn = 102;
	if (query.pause != null) {
		pauseIn = parseInt(query.pause);
	}
	if (query.video != null) {
		videoID = query.video;
	}
	var minutes = 10;
	console.log(query);
	if (query.minutes != null) {
		minutes = parseInt(query.minutes);
	}
	var seconds = 0;
	if (query.seconds != null) {
		seconds = parseInt(query.seconds);
	}

	time = new Date(0, 0, 0, 0, minutes, seconds, 0);
	count = seconds + minutes * 60;
	console.log(count);
	setTime();
	showVideo();
});

function setTime() {
	var text = "";
	var prev = false;
	if (time.getMinutes() > 0 || prev) {
		text += Math.floor(time.getMinutes() / 10) + "" + time.getMinutes() % 10 + " : ";
		prev = true;
	}
	if (time.getSeconds() > 0 || prev) {
		text += Math.floor(time.getSeconds() / 10) + "" + time.getSeconds() % 10;
	}
	$("div#time").text(text);
}

/**
 * Used to get the query part of the URL
 * @return {Object} result result is a JSONObject containing the different query parameters in the URL
 */
function get_query() {
	var url = location.href;
	var qs = url.substring(url.indexOf('?') + 1).split('&');
	for (var i = 0, result = {}; i < qs.length; i++) {
		qs[i] = qs[i].split('=');
		result[qs[i][0]] = qs[i][1];
	}
	return result;
}

function timer() {
	count = count - 1;
	if (count <= 10) {
		$("div#time").animate({
			"font-size" : "750px"
		}, 999, function() {
			$("div#time").css("font-size","384px");
		});
	}
	if (count <= 0) {
		clearInterval(counter);
		$("#video").css("top", "0");
		$("div#current").css("top", "0");
		player.playVideo();
		counter = setInterval(progressTimer, 1000);
		return;
	}
	time = new Date(time.getTime() - 1000);
	console.log(time);
	setTime();
}

function progressTimer() {
	pauseIn = pauseIn - 1;
	if (pauseIn <= 0) {
		player.pauseVideo();
		clearInterval(counter);
	}
	console.log(pauseIn);
}

function showVideo() {
	createYTPlayer("video", "100%", "100%", videoID);
}

/**
 * The 'createYTPlayer' function embeds an <iframe> player.
 * @param {string} playerDiv Mandatory The DOM ID for the div where the
 *     <iframe> will be embedded.
 * @param {string} playerHeight Mandatory The height of the embedded player.
 * @param {string} playerWidth Mandatory The width of the embedded player.
 * @param {string} playerVideoId Mandatory The video ID to embed.
 * @param {Object} playerVars Mandatory Player parameters or {}.
 */
function createYTPlayer(playerDiv, playerHeight, playerWidth, playerVideoId, playerVars) {
	player = new YT.Player(playerDiv, {
		height : playerHeight,
		width : playerWidth,
		videoId : playerVideoId,
		playerVars : playerVars,
		events : {
			'onError' : onPlayerError,
			'onReady' : onReady,
			'onProgress' : onProgress
		}
	});
}

function onReady() {
	player.playVideo();
	player.pauseVideo();
	$("#video").css("top", "100%");
	counter = setInterval(timer, 1000);
}

/**
 * The 'onPlayerError' function executes when the onError event fires.
 * It captures the error and adds it to an array that is displayed in
 * the "Errors" section of the demo.
 * @param {string} errorCode Mandatory A code that explains the error.
 */
function onPlayerError(errorCode) {
	alert("YouTube player error:" + errorCode);
}

function onProgress() {

}

// Find the right method, call on correct element
function launchFullScreen(element) {
	if (element.requestFullScreen) {
		element.requestFullScreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen();
	}
}