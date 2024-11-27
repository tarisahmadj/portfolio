// Handle scroll effect for header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scroll-active', window.scrollY > 50);
  });
  
  // Toggle menu visibility for mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  