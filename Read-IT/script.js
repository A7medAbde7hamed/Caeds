const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


  const menuIcon = document.getElementById('menu-icon');
  const nav = document.getElementById('nav');

  menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

