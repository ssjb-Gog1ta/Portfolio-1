
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.menu');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
      navbar.classList.toggle('active');
      menuIcon.setAttribute(
        'name',
        navbar.classList.contains('active') ? 'close' : 'menu'
      );
    });
  });
