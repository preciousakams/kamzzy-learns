const bars = document.querySelector('.bars');
const navMenu = document.querySelector('.nav-menu');
bars.addEventListener('click', () => {
  bars.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  bars.classList.remove('active');
  navMenu.classList.remove('active');
}));