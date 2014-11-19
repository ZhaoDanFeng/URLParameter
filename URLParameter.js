$(document).ready(function(){
	$("a").click(function(){
		var link = $(this).attr("href")
		var pu = location.search
		link = link + pu
		$(this).attr("href",link);
	});
});