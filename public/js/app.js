var templates = {};
var views = {};

var resume = {
	fetchTemplate: function(mustache, success){
	 $.get('/mustaches/'+mustache+'.html', null, function(template){
			 templates[mustache]=template;
			 success == null ? null : success()
			 });
	},

	fetchView: function(mustache, success) {
		$.getJSON('/json/'+mustache+'.json', function(view){
			 views[mustache] = view
			 success == null ? null : success()
			 });
	},								 

	renderMustache: function(mustache, success){ 
			var html = $.mustache(templates[mustache],views[mustache]);
			success(html);
	},

	render:  function(mustache, success){
		resume.fetchView(mustache, function(){
			resume.fetchTemplate(mustache, function(){
				resume.renderMustache(mustache, success);
			})
		});
	}
};

/*$.get("/mustaches/"+A+".html",null,function(D){var C={templates:{}};C.templates[A]=D;twttr.merge(twttr,C,true);B(twttr.templates)},"html")};*/
$(document).ready(
	function(){
		resume.render('jobs', function(html){$('#main').html(html)})
	}
);
