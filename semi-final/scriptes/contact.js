const angleDownIcons = document.querySelectorAll('.icon');
angleDownIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const dropdownMenu = icon.nextElementSibling;
    dropdownMenu.classList.toggle('show');  
  });
});