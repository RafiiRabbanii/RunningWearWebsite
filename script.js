// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
}

document.addEventListener("click", function (e) {
  // Periksa jika klik di luar hamburger dan navbar
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});