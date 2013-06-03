Package.describe({
	summary: "Gumby Css Framework v2 for Meteor"
});

Package.on_use(function (api, where) {

	api.use(['templating'], 'client');

	api.add_files('fonts/icons/entypo.eot', 'client');
	api.add_files('fonts/icons/entypo.ttf', 'client');
	api.add_files('fonts/icons/entypo.woff', 'client');

	api.add_files([
		'css/gumby.css',
		'js/libs/modernizr-2.6.2.min.js',
		'js/libs/gumby.min.js',
		'js/plugins.js'], 'client');
});