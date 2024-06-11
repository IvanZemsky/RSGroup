const burgerBtn = document.getElementById('burger')
const closeMenuBtn = document.getElementById('closeMenuBtn')
const menu = document.getElementById('menu')

burgerBtn.addEventListener('click', () => {
   menu.classList.add('header__nav--opened')
})

closeMenuBtn.addEventListener('click', () => {
   menu.classList.remove('header__nav--opened')
})