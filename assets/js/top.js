
$(function(){
const button = document.querySelector('.btn');

const displayButton = () => {
  window.addEventListener('scroll', () => {
  
    if (window.scrollY > 100) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    }); 
    console.log(event);
  });
};

displayButton();
scrollToTop();
});


$(document).ready(function () {
  var x, size_li;
  function changeLoadCount(media) {
    if (media.matches) {
      x = 6; // no. of items per click mobile <= 767
      $(".works-content__item").hide();
      $(".works-content__item:lt(" + x + ")").show();
      size_li = $(".works-content__item").size();
      if (x == size_li) {
        $(".portfolio-more-btn-wrapper").hide();
      } else {
        $(".portfolio-more-btn-wrapper").show();
      }
    } else {
      x = 6; // no. of items per click in desktop >= 768
      $(".works-content__item").hide();
      $(".works-content__item:lt(" + x + ")").show();
      size_li = $(".works-content__item").size();
      if (x == size_li) {
        $(".portfolio-more-btn-wrapper").hide();
      } else {
        $(".portfolio-more-btn-wrapper").show();
      }
    }
  }

  var media = window.matchMedia("(max-width: 767px)");
  changeLoadCount(media);
  media.addListener(changeLoadCount);
  window.addEventListener("load resize", function () {
    changeLoadCount(media);
    media.addListener(changeLoadCount);
  });

  function loadMore() {
    $(".works-content__item").hide();
    size_li = $(".works-content__item").size();
    $(".works-content__item:lt(" + x + ")").show();
    $(".more-btn").click(function () {
      if (media.matches) {
        x = x + 4 <= size_li ? x + 4 : size_li;
      } else {
        x = x + x <= size_li ? x + x : size_li;
      }
      $(".works-content__item:lt(" + x + ")").show();
      if (x == size_li) {
        $(".works-content__button").hide();
      } else {
        $(".works-content__button").show();
      }
    });
  }
  loadMore();
});

