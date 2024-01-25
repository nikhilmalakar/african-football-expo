// var mainListDiv = document.getElementById("mainListDiv"),
//     mediaButton = document.getElementById("mediaButton");

// mediaButton.onclick = function () {
    
//     "use strict";
    
//     mainListDiv.classList.toggle("show_list");
//     mediaButton.classList.toggle("active");
    
// };
var TrandingSlider = new Swiper('.trending-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 200, // Increase the depth for a more pronounced 3D effect
    modifier: 2,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2100,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  speed: 800,
  parallax: true,
  mousewheel: true, // Enable mousewheel control
  keyboard: true, // Enable keyboard control
  effect: 'cube', // Use cube effect when navigating
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 80,
    shadowScale: 0.94,
  },
});
