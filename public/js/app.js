var templates = {};
var views = {};

var resume = {
	fetchTemplate: function(mustache, success){
		$.get('/mustaches/'+mustache+'.mustache', null, function(template){
			templates[mustache]=template;
			if(success !== null) {success(template);}
		});
	},

	fetchView: function(mustache, success) {
		$.getJSON('/json/'+mustache+'.json', function(view){
			views[mustache] = view;
		});
		if(success !== null) { success(views[mustache]);}
	},								 

	renderMustache: function(mustache, success){ 
		var html = $.mustache(templates[mustache],views[mustache]);
		success(html);
	},

	render:  function(mustache, success){
		resume.fetchView(mustache, function(){
			resume.fetchTemplate(mustache, function(){
				resume.renderMustache(mustache, success);
			});
		});
	}
};

$(document).ready(function(){
	resume.render('jobs', function(html){$('#main').html(html);});
	resume.render('madagascar', function(html){$('#main').append(html);});
});
