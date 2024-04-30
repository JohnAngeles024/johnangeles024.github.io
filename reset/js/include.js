//css
$(function(css_include){
	const incStyle = [
		'<link rel="stylesheet" href="reset/css/base.css" >',
	];
    $('head link:first').after(incStyle);
});

