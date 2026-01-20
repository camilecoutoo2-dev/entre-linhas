function start() {
  document.querySelector('.intro').style.display = 'none';

  const sections = document.querySelectorAll('.hidden');
  let delay = 0;

  sections.forEach(section => {
    setTimeout(() => {
      section.style.display = 'flex';
    }, delay);
    delay += 2500;
  });
}