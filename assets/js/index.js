/*  Slick：商品スライド
――――――――――――――――――――――――――――――――――――――*/
function initializeSlider() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.slider').slick({
      centerMode: false,
      Infinity: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slideToScroll: 1,
      prevArrow: '<div class="slide-arrow prev-arrow"></div>',
      nextArrow: '<div class="slide-arrow next-arrow"></div>'
    });
  } else {
    // If not on mobile, destroy the slick slider if it exists
    if ($('.slider').hasClass('slick-initialized')) {
      $('.slider').slick('unslick');
    }
  }
}

// Initialize the slider on page load
$(document).ready(function() {
  initializeSlider();
});

// Reinitialize the slider when the window is resized
$(window).resize(function() {
  initializeSlider();
});

/*  アンカーリンクずれ解消
――――――――――――――――――――――――――――――――――――――*/
window.onload = function() {
  if(window.location.hash==""){return;}
  document.getElementById(window.location.hash.slice(1)).scrollIntoView(true);
};

/*  tile：商品名高さ揃え
――――――――――――――――――――――――――――――――――――――*/
$(function(){
  //連番クラス追加
	$('.page .works-content__list').each(function(i){
    $(this).addClass('js-tileHeight-' + (i++));
    $(this).css('height','auto');
	});
  //高さ揃えの実行
  setTimeout(function(){
    var ItemName0 = $('.js-tileHeight-0').find('.project__text').length;
    $('.js-tileHeight-0').find('.project__text').tile(ItemName1);

    var ItemName1 = $('.js-tileHeight-1').find('.project__text').length;
    $('.js-tileHeight-1').find('.project__text').tile(ItemName1);

    var ItemName2 = $('.js-tileHeight-2').find('.project__text').length;
    $('.js-tileHeight-2').find('.project__text').tile(ItemName2);

    var ItemName3 = $('.js-tileHeight-3').find('.project__text').length;
    $('.js-tileHeight-3').find('.project__text').tile(ItemName3);

    var ItemName4 = $('.js-tileHeight-4').find('.project__text').length;
    $('.js-tileHeight-4').find('.project__text').tile(ItemName4);

    var ItemName5 = $('.js-tileHeight-5').find('.project__text').length;
    $('.js-tileHeight-5').find('.project__text').tile(ItemName5);

    var ItemName6 = $('.js-tileHeight-6').find('.project__text').length;
    $('.js-tileHeight-6').find('.project__text').tile(ItemName6);
  },1000);
});


$(function() {
  // 連番クラス追加 (add sequential classes)
  $('.page .works-content__list').each(function(i) {
    $(this).addClass('js-tileHeight-' + i);
    $(this).css('height', 'auto');
  });

  // 高さ揃えの実行 (equalize heights)
  setTimeout(function() {
    $('.page .works-content__list').each(function(i) {
      var $list = $('.js-tileHeight-' + i);

      // Equalize project__text heights
      var textCount = $list.find('.project__text').length;
      if (textCount > 0) {
        $list.find('.project__text').tile(textCount);
      }

      // Equalize project__fig heights
      var figCount = $list.find('.project__fig').length;
      if (figCount > 0) {
        $list.find('.project__fig').tile(figCount);
      }
    });
  }, 1000);
});

window.addEventListener('scroll', function() {
  var navLinks = document.querySelectorAll('.nav__link');
  var fromTop = window.scrollY;

  navLinks.forEach(function(link) {
    // Extract the ID from href attribute
    var sectionId = link.getAttribute('href').substring(1); // Remove the '#' character
    var section = document.getElementById(sectionId);

    // Check if section exists
    if (section !== null) {
      if (
        section.offsetTop <= fromTop + 100 &&
        section.offsetTop + section.offsetHeight > fromTop + 100
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
});

window.addEventListener('scroll', function() {
  var nav = document.querySelector('nav');
  var fromTop = window.scrollY;

  if (fromTop > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});


$(document).ready(function () {
  $('.item__list__img').each(function () {
    var item = $(this);
    var fade1 = item.find('.fade1');
    var fade2 = item.find('.fade2');
    var isFade1Visible = true;

    setInterval(function () {
      if (isFade1Visible) {
        fade1.removeClass('show');
        fade2.addClass('show');
      } else {
        fade1.addClass('show');
        fade2.removeClass('show');
      }

      isFade1Visible = !isFade1Visible;
    }, 500); // 500 milliseconds for the fade loop
  });
});


$(document).ready(function(){
  var hideNav = false; // Flag to track if navigation should be hidden
  
  $('.hamburger').click(function(){
    $('.nav, .nav__list').toggleClass('show'); // Toggle the .show class on click
    $(this).toggleClass('open'); // Toggle class for changing hamburger to X
    if ($(this).hasClass('open')) {
      $(this).html('&times;'); // Change to X when menu is shown
      $('body').css('overflow', 'hidden'); // Disable scrolling when menu is open
    } else {
      $(this).html('&#9776;'); // Change back to hamburger when menu is closed
      $('body').css('overflow', 'auto'); // Enable scrolling when menu is closed
    }
  });

  // Smooth scroll to anchor links
  $('.nav__link').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000, function() {
      // After scrolling, hide the navigation menu permanently
      $('.nav, .nav__list').removeClass('show');
      $('.hamburger').removeClass('open').html('&#9776;');
      $('body').css('overflow', 'auto');
      hideNav = true;
    });
  });

  // Check if the user has scrolled
  $(window).scroll(function() {
    if (hideNav) {
      $('.nav, .nav__list').removeClass('show');
      $('.hamburger').removeClass('open').html('&#9776;');
      $('body').css('overflow', 'auto');
      hideNav = false; // Reset flag to prevent continuous hiding
    }
  });
});



