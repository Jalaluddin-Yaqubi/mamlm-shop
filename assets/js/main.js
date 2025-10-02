// 1) load header & footer
async function loadComponent(id, file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');

// 2) اسلایدر اختیاری (اگر تصویر گذاشتی فعال می‌شود)
const slider = document.querySelector('.slides');
if (slider) {
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;
  const total = slider.children.length;

  function showSlide(i) {
    index = (i + total) % total;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
  // خودکار ۵ ثانیه
  setInterval(() => showSlide(index + 1), 5000);
  prevBtn?.addEventListener('click', () => showSlide(index - 1));
  nextBtn?.addEventListener('click', () => showSlide(index + 1));
}

// 3) سبـد خرید محلی
const CART_KEY = 'ma-cart';
function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(name, price, img) {
  let cart = getCart();
  let found = cart.find(i => i.name === name);
  if (found) found.qty += 1;
  else cart.push({name, price, img, qty: 1});
  saveCart(cart);
  alert('✅ به سبد اضافه شد');
}
