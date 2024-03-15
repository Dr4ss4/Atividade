// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

var slider = new Swiper(".swiper-container", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 150,
  centeredSlides: true,
  mousewheel: true,
  pagination: {
    el: ".planet-links",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + keys[index] + "</div>";
    }
  }
});

slider.on("slideChange", function () {
  console.log("SLIDE CHANGED");
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 20
  });
});


slider.on("slideChangeTransitionEnd", function () {
  gsap.to(".swiper-slide .slide-img", 1, {
    rotation: 10
  });

  gsap.to(".swiper-slide-next .slide-text", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-text", 0, {
    autoAlpha: 0
  });

  gsap.to(".swiper-slide-next .slide-number", 0, {
    autoAlpha: 0
  });
  gsap.to(".swiper-slide-prev .slide-number", 0, {
    autoAlpha: 0
  });
});