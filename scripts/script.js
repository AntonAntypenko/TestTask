document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menuIcon');
    const mainMenu = document.querySelector('.mainMenu');

    menuIcon.addEventListener('click', function () {
      mainMenu.classList.toggle('show');
    });
  });