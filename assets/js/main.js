// 1) load header & footer
async function loadComponent(id, file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');

// 2) اسلایدر خودکار ۵ ثانیه
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;
const total = slides.children.length;

function showSlide(i) {
  index = (i + total) % total;
  slides.style.transform = `translateX(-${index * 100}%)`;
}
// خودکار هر ۵ ثانیه
setInterval(() => {
  showSlide(index + 1);
}, 5000);

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));
