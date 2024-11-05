
document.querySelector('.hamburgerLinks-icon').addEventListener('click', () => {
  const hamburgerIcon = document.querySelector('.hamburgerLinks-icon');
  const hamburgerLinks = document.querySelector('.hamburgerLinks');
  const header = document.querySelector('.bigger-header'); // select the header

  if (hamburgerIcon.textContent === '☰') {
    hamburgerIcon.textContent = '✖';
    hamburgerLinks.style.visibility = 'visible';
    hamburgerLinks.style.width = '100%';  // Or whatever width you want
    header.classList.add('move-down');  // move the header down
  } else {
    hamburgerIcon.textContent = '☰';
    hamburgerLinks.style.width = '0';
    setTimeout(() => {
    hamburgerLinks.style.visibility = 'hidden';
    }, 500); // Delay setting visibility to allow for width transition
    header.classList.remove('move-down');
  }
});

  const hamburgerLinks = document.querySelectorAll('.hamburgerLinks a');

  hamburgerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
    console.log('Menu link clicked!');

    const hamburgerLinksElement = document.querySelector('.hamburgerLinks');
    hamburgerLinksElement.style.width = '0';
    setTimeout(() => {
      hamburgerLinksElement.style.visibility = 'hidden';
    }, 500);  // Delay to allow transition before hiding
    document.querySelector('.hamburgerLinks-icon').textContent = '☰'; // Reset the icon
    document.querySelector('.bigger-header').classList.remove('move-down'); // Move header back up
      });
});