$(document).ready(function(){
	glue.render('jobs', '/json/jobs.json', function(html){$('#main').html(html);});
	glue.render('madagascar', '/json/madagascar.json', function(html){$('#main').append(html);});
});
