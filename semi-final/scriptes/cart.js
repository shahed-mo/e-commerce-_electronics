// const addMore = document.querySelectorAll(".add-more-input");
// const minus = document.querySelectorAll(".minus");
// const plus = document.querySelectorAll(".plus");

// minus.forEach((item ) =>
//     item.addEventListener("click", () =>{
//         addMore.forEach((item)=>
//             item.value--
        
//         );

//     }),
// );
// plus.forEach((item ) =>
//     item.addEventListener("click", () =>{
     
//     }),
// );

const angleDownIcons = document.querySelectorAll('.icon');
angleDownIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const dropdownMenu = icon.nextElementSibling;
    dropdownMenu.classList.toggle('show');  
  });
});

    function addMore(e) {
        const button = e.currentTarget;
        const input = button.parentElement.querySelector('.add-more-input');
        let value = parseInt(input.value);

        if (button.classList.contains('minus')) {
            input.value = value > 0 ? value - 1 : 0;
        } else if (button.classList.contains('plus')) {
            input.value = value + 1;
        }
}
document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', addMore);
});
document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', addMore);
});
