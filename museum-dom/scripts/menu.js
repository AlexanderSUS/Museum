const headerNav = document.querySelector('.header-nav')
const gamburger = document.querySelector('.gamburger');

gamburger.addEventListener('click', () => {
  if (gamburger.classList.contains('active')) {
    gamburger.classList.remove('active');
    headerNav.classList.remove('active');
  } else {
    gamburger.classList.add('active');
    headerNav.classList.add('active');
  }
});
