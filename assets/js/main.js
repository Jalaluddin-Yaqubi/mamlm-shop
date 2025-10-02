// 1) load header & footer
async function loadComponent(id, file) {
  const res = await fetch(file);
  const text = await res.text();
  document.getElementById(id).innerHTML = text;
}
loadComponent('header', 'components/header.html');
loadComponent('footer', 'components/footer.html');

// 2) سبـد خرید محلی (LocalStorage)
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

// 3) کد تخفیف ساده
const DISCOUNT_CODE = 'ADIB10'; // ۱۰٪ تخفیف
function applyDiscount() {
  const code = prompt('کد تخفیف را وارد کنید:');
  if (code === DISCOUNT_CODE) {
    localStorage.setItem('ma-discount', '10');
    alert('✅ کد تخفیف ۱۰٪ اعمال شد!');
    location.reload();
  } else {
    alert('❌ کد اشتباه است');
  }
}
