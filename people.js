$( document ).ready(function() {
	var names = "";


	$.getJSON('peopleinspace.json', function(sd) {
		$('h1').html(sd.number);
		$.each(sd.people, function(key, val) {
			var launch = val.launchdate;
			var days = 10; 
			names += ('<a href="' + val.biolink + '" target="_blank"><div class="item cf"><div class="person-name"><h2>' + val.name + '</h2><img class="flag" src="'+ val.countryflag +'"><h3>' + val.title + '</h3></div><div class="person-days"><h4>' + days + '</h4><p>Days in space</p></div></div></a>');
		});
		$('#listing').html(names);
	});
});