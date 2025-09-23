// Smooth scroll navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"});
  });
});

// Add to Cart using localStorage
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemIndex = cart.findIndex(item => item.name === name);
  if (itemIndex > -1) {
    cart[itemIndex].qty += 1;
  } else {
    cart.push({name, price, qty:1});
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
