(function ($) {
  "use strict";

  // Mobile menu js start
  $(".mobile-topbar .bars").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(".sub-mobile-menu ul").not($(this).next("ul")).slideUp(300);
    $(".sub-mobile-menu a i")
      .not($(this).find("i"))
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");
    $(this).next("ul").slideToggle(300);
    $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
  });

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".header-section").addClass("scrolled");
    } else {
      $(".header-section").removeClass("scrolled");
    }
  });

  // Swiper Slider
  var swiper = new Swiper(".mySwiper", {
    scrollbar: {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      el: ".swiper-scrollbar",
      hide: false,
    },
  });
})(jQuery);
