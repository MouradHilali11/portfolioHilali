const openMenuBtn = document.getElementById('bars_btn');
const closeMenuBtn = document.getElementById('x_btn');
const menu = document.getElementById('menu');

openMenuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
});

closeMenuBtn.addEventListener('click', () => {
    menu.style.display = 'none';
});
