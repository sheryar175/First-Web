let resetTimer;

document.querySelector('.home').onmousemove = (e) => {
  let homeTitle = document.querySelector('.home h1');
  let homeImages = document.querySelectorAll('.home img');

  let centerX = window.innerWidth / 4;
  let centerY = window.innerHeight / 4;

  let mouseX = e.pageX - centerX;
  let mouseY = e.pageY - centerY;

  homeTitle.style.transform = `translate(${mouseX / 2}px, ${mouseY / 5}px)`;

  homeImages.forEach(image => {
    let speed = parseFloat(image.getAttribute('data-speed'));
    let offsetX = Math.abs(mouseX) / speed;
    let offsetY = Math.abs(mouseY) / speed;

    image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });

  clearTimeout(resetTimer);

  resetTimer = setTimeout(() => {
    homeTitle.style.transform = '';
    homeImages.forEach(image => {
      image.style.transform = '';
    });
  }, 3000);
};


var swiper = new Swiper(".vehicles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor:true,
  centeredSlides:true,
  loop:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});




var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor:true,
  centeredSlides:true,
  loop:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});