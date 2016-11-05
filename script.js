
$(document).ready(function() {
	$("#fly").click(function() {
		var fly = $("img#fly");
		var a = 500 * Math.random();
		var b = 930 * Math.random();
		fly.css({"top":a +'px', "left":b +'px'});
	});
});