

//ヘッダー・フッター読み込み
var windowWidth = $(window).width();
var windowSm = 640;
if (windowWidth <= windowSm) {
    $(function(){
	  $("#header").load("reset/js/sp/header.html");
	});

	$(function(){
	  $("#footer").load("reset/js/sp/footer.html");
	});
} else {
    $(function(){
	  $("#header").load("reset/js/header.html");
	});

	$(function(){
	  $("#footer").load("reset/js/footer.html");
	});
}

//PC：スクロール ヘッダー高さ/ロゴ画像変更
$(window).on("scroll", function () {
const comonnnavi = $('.l-header_inner');
const headImg = $('.m-logo').children('img');

	if (window.matchMedia('(min-width: 769px)').matches) {
		if ($(this).scrollTop() > 10) {
		  comonnnavi.css("height","0");
		  headImg.attr('src', 'https://www.y-aoyama.jp/user_data/packages/store/img/header/logo-small.png');
		} else{
		  comonnnavi.css("height","19px");
		  headImg.attr('src', 'https://www.y-aoyama.jp/user_data/packages/store/img/header/logo-big.png');
		}
	}
});

//共通CSS/JS読込
$(function(css_include){
	const incStyle = [
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/store/css/common/fonts.css" media="screen and (min-width:641px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/store/css/common/base.css" media="screen and (min-width:641px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/store/css/common/layout.css?v=20201021" media="screen and (min-width:641px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/store/css/common/module.css" media="screen and (min-width:641px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/store/css/common/common_pc.css" media="screen and (min-width:641px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/store/css/common/swiper.min.css">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/store/css/header.css" media="all">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/store/css/footer.css" media="all">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/sphone/css/common/fonts.css" media="screen and (max-width:640px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/sphone/css/common/base.css" media="screen and (max-width:640px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/sphone/css/common/layout.css" media="screen and (max-width:640px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/sphone/css/common/module.css" media="screen and (max-width:640px)">',
		'<link rel=stylesheet href="https://www.y-aoyama.jp/user_data/packages/sphone/css/common/state.css" media="screen and (max-width:640px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/sphone/css/header.css" media="all">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/sphone/css/footer.css" media="all">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/sphone/css/common/common_sp.css" media="screen and (max-width:640px)">',
		'<link rel="stylesheet" href="https://www.y-aoyama.jp/user_data/packages/sphone/css/common/foundation.css" media="screen and (max-width:640px)">'
	];
    $('head link:first').after(incStyle);
});
$(function(js_include){
	const incScript = [
		'<script src="reset/js/cart.js" defer></script>',
		'<script src="https://www.y-aoyama.jp/user_data/packages/store/js/static/non.reload.cartin.js"></script>'
	];
    $('head script:first').after(incScript);
});
