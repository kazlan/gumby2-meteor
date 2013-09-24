Package.describe({
	summary: "Gumby Css Framework v2.5"
});

Package.on_use(function (api, where) {

	api.use(['jquery'], 'client');

	api.add_files('fonts/icons/entypo.eot', 'client');
	api.add_files('fonts/icons/entypo.ttf', 'client');
	api.add_files('fonts/icons/entypo.woff', 'client');

	api.add_files([
		'css/gumby.css',
		'js/libs/modernizr-2.6.2.min.js',
		'js/libs/jquery.mobile.custom.min.js',
		'js/libs/gumby.js',
		'js/libs/ui/gumby.checkbox.js',
		'js/libs/ui/gumby.fixed.js',
		'js/libs/ui/gumby.navbar.js',
		'js/libs/ui/gumby.radiobtn.js',
		'js/libs/ui/gumby.retina.js',
		'js/libs/ui/gumby.skiplink.js',
		'js/libs/ui/gumby.tabs.js',
		'js/libs/ui/gumby.toggleswitch.js',
		'js/libs/ui/jquery.validation.js',
		'js/main.js',
		'js/plugins.js'], 'client');

	api.export(['Modernizr', 'Gumby'], "client");
});
