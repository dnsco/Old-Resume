(function($) {
	var app = $.sammy('#main', function(){
		this.use(Sammy.Handlebars, 'hb');
		this.around(function(callback){
			var context = this;
			this.load('/data/jobs.json')
			.then(function(jobs){ context.jobs = jobs;})
			.then(this.load('/data/madagascar.json').then(function(madagascar){context.madagascar = madagascar;}))
			.then(callback);
			window.hoe = context;
		});

		this.get('#/', function(context) {
			this.partial('/templates/jobs.hb')
			.then(function(){
				this.render('/templates/madagascar.hb').appendTo(context.$element());
			});
		});
	});

	$(document).ready(function(){
		$('#main').html('');
		app.run('#/');
	});
	window.app = app;
})(jQuery);
