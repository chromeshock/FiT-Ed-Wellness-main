
document.querySelector('.hamburger-icon').addEventListener('click', () => {
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const hamburger = document.querySelector('.hamburger');
  const header = document.querySelector('.bigger-header'); // select the header

  if (hamburgerIcon.textContent === '☰') {
    hamburgerIcon.textContent = '✖';
    hamburger.style.visibility = 'visible';
    hamburger.style.width = '100%';  // Or whatever width you want
    header.classList.add('move-down');  // move the header down
  } else {
    hamburgerIcon.textContent = '☰';
    hamburger.style.visibility = 'hidden';
    hamburger.style.width = '0';
    header.classList.remove('move-down'); // move the header back up
  }
});
