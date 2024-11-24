document.addEventListener('DOMContentLoaded', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const hamburgerLinksContainer = document.querySelector('.hamburgerLinks'); // Changed name to improve clarity
  const header = document.querySelector('.bigger-header');
  const navLinks = document.querySelectorAll('.hamburgerLinks a');

  if (hamburgerIcon && hamburgerLinksContainer) {
    // Event listener for the hamburger icon click
    hamburgerIcon.addEventListener('click', () => {
      if (hamburgerIcon.textContent === '☰') {
        hamburgerIcon.textContent = '✖';
        hamburgerLinksContainer.style.visibility = 'visible';
        hamburgerLinksContainer.style.width = '70%';
        header.classList.add('move-down');
      } else {
        closeMenu();
      }
    });

    // Event listeners for each navigation link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  } else {
    console.error("Hamburger icon element or links not found");
  }

  // Function to close the menu
  function closeMenu() {
    hamburgerIcon.textContent = '☰';
    hamburgerLinksContainer.style.width = '0';
    setTimeout(() => {
      hamburgerLinksContainer.style.visibility = 'hidden';
    }, 500);
    header.classList.remove('move-down');
  }
});
