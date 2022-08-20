const headerNav = document.querySelector('.header-nav')
const gamburger = document.querySelector('.gamburger');

gamburger.addEventListener('click', () => {
  gamburger.classList.toggle('active');
  headerNav.classList.toggle('active');
});
