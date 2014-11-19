$(document).ready(function(){
	var $aElement = $("a");
	$aElement.on('click', function(){
		$(this).attr("href",$(this).attr("href") + location.search);
	});
});