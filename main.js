document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.icon-hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeIcon = document.querySelector('.icon-close');
  
    menuIcon.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    });
  
    closeIcon.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
    });
  });
  