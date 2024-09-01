const angleDownIcons = document.querySelectorAll('.icon');
angleDownIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const dropdownMenu = icon.nextElementSibling;
    dropdownMenu.classList.toggle('show');  
  });
});
// -------------------------

document.addEventListener('DOMContentLoaded', function() {
  const myCarousel = document.querySelector('#carouselExampleControlsNoTouching');
  const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 3000, 
      ride: 'carousel'
  });
});