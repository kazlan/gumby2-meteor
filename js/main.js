if(Modernizr.touch){
	Gumby.click = 'tap';
}

Gumby.init();

// Gumby is ready to go
Gumby.ready(function() {
	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

