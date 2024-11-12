document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', () => {
      // Your event handler code
      const hamburgerLinks = document.querySelector('.hamburgerLinks');
      const header = document.querySelector('.bigger-header');

      if (hamburgerIcon.textContent === '☰') {
        hamburgerIcon.textContent = '✖';
        hamburgerLinks.style.visibility = 'visible';
        hamburgerLinks.style.width = '70%';
        header.classList.add('move-down');
      } else {
        hamburgerIcon.textContent = '☰';
        hamburgerLinks.style.width = '0';
        setTimeout(() => {
          hamburgerLinks.style.visibility = 'hidden';
        }, 500);
        header.classList.remove('move-down');
      }
    });
  } else {
    console.error("Hamburger icon element not found");
  }
});

const navLinks = document.querySelectorAll('hambergerLinks a');
navLinks.forEach('click', (event) => {
  event.preventDefault();
})