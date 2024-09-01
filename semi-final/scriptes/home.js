
var swiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000, 
        disableOnInteraction: false,
    },
    speed: 1000, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
// ------------Brand------------------
var script = document.createElement('script');
script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
script.onload = function() {
    var swiper = new Swiper('.pupolar-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        speed: 900,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

   
    function autoSlide() {
        swiper.slideNext();
        setTimeout(autoSlide, 5000);
    }

   
    setTimeout(autoSlide, 5000);
};
document.head.appendChild(script);

// --------------------------------
function updateCountdown() {
    var now = new Date().getTime();
    var countdownDate = new Date('2024-12-31T23:59:59').getTime();
    var distance = countdownDate - now;
    if (distance < 0) {
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        return;
    }
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
setInterval(updateCountdown, 1000);
// ---------------
var swiper = new Swiper('.best-selling .slider-boxx', {
    slidesPerView: 3,
    spaceBetween: 25,
    centeredSlides: true,
    speed: 1000,
    pagination: false,
    pagination: false,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        787: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        }
    }
  });

  var swiper = new Swiper('.slider-box',{
    slidesPerView: 5,
    spaceBetween: 30,
    speed: 1000,
    pagination: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        787: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 5,
        }
    }
});
// -------------------

var swiper = new Swiper('.testimonials .testimonials-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    pagination: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
    loop: true,
});
