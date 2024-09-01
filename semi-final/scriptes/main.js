const swiperContainer = document.querySelector('.swiper');
const slides = document.querySelectorAll('.swiper-slide');
const prevBtn = document.querySelector('.swiper-button-prev');
const nextBtn = document.querySelector('.swiper-button-next');
const num = document.querySelector('.swiper-pagination-current');
const total = document.querySelector('.swiper-pagination-total');
let index = 0;
let intervalId;

total.textContent = slides.length;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.style.display = i === idx ? 'block' : 'none';
   
  });
  num.textContent = idx + 1;
}

function moveToNextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
  
}

function moveToPrevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

showSlide(index);

nextBtn.addEventListener('click', () => {
  moveToNextSlide();
  resetInterval();
});

prevBtn.addEventListener('click', () => {
  moveToPrevSlide();
  resetInterval();
});

function startInterval() {
  intervalId = setInterval(() => {
    moveToNextSlide();
  }, 3000);
}

function resetInterval() {
  clearInterval(intervalId);
  startInterval();
}
startInterval();

document.addEventListener("DOMContentLoaded", function() {
  const rangeInput = document.querySelectorAll(".range-input input");
  const numberInput = document.querySelectorAll(".price-input input");
  const slider = document.querySelector(".slider");
  const progress = document.querySelector(".progress");

  function updateSliderTrack() {
    const minVal = parseInt(rangeInput[0].value);
    const maxVal = parseInt(rangeInput[1].value);
    const rangeMin = parseInt(rangeInput[0].min);
    const rangeMax = parseInt(rangeInput[0].max);

    const trackLeft = ((minVal - rangeMin) / (rangeMax - rangeMin)) * 100;
    const trackWidth = ((maxVal - minVal) / (rangeMax - rangeMin)) * 100;

    progress.style.left = trackLeft + "%";
    progress.style.width = trackWidth + "%";

    numberInput[0].value = minVal;
    numberInput[1].value = maxVal;
  }

  rangeInput.forEach(input => {
    input.addEventListener("input", () => {
      let minVal = parseInt(rangeInput[0].value);
      let maxVal = parseInt(rangeInput[1].value);

      if (maxVal - minVal < 100) {
        if (input.classList.contains("range-min")) {
          rangeInput[0].value = maxVal - 100;
        } else {
          rangeInput[1].value = minVal + 100;
        }
      } else {
        numberInput[0].value = minVal;
        numberInput[1].value = maxVal;
        updateSliderTrack();
      }
    });
  });

  numberInput.forEach(input => {
    input.addEventListener("input", () => {
      let minVal = parseInt(numberInput[0].value);
      let maxVal = parseInt(numberInput[1].value);

      if (maxVal - minVal >= 100 && maxVal <= 10000 && minVal >= 0) {
        rangeInput[0].value = minVal;
        rangeInput[1].value = maxVal;
        updateSliderTrack();
      }
    });
  });

  updateSliderTrack();
});

document.addEventListener('DOMContentLoaded', function() {
  const collect = document.querySelector('.arrow i');
  const filterGroups = document.querySelector('#num .group-body');
  collect.addEventListener('click', function() {
    filterGroups.classList.toggle('active1');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const heartIcons = document.querySelectorAll('.fav-btn i');

  heartIcons.forEach(heart => {
    heart.addEventListener('click', () => {
      heart.classList.toggle('green');
    });
  });
});






document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.best-slider');
  const prevButton = document.querySelector('.main-content .swiper-button-prev');
  const nextButton = document.querySelector(' .main-content  .swiper-button-next');
  const slides = document.querySelectorAll('.swiper-slide-active');
  let currentIndex = 0;

  function updateSliderPosition() {
      const slideWidth = slides[0].offsetWidth;
      slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextButton.addEventListener('click', () => {
    // Move to the next slide if the current index is less than the last slide index
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSliderPosition();
    }
});


  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateSliderPosition();
      }
  });

  window.addEventListener('resize', updateSliderPosition);

  updateSliderPosition();
});




