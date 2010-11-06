(function($) {
	var app = $.sammy('#main', function(){
		this.use(Sammy.Handlebars, 'hb');
		// this.raise_errors = true;
		// this.debug = true;
		this.around(function(callback){
			var context = this;
			this.load('/data/madagascar.json').then(function(madagascar){ context.madagascar = madagascar;})
			.then(this.load('/data/jobs.json').then(function(jobs){ context.jobs = jobs;}))
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
