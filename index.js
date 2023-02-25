document.querySelector('.burger-btn').addEventListener('click', () => {
  const menu = document.querySelector('.header__nav');
  menu.classList.toggle('open');
})