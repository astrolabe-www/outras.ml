let addButton;
let viewButton;
let product = {};

function addToCart() {
  cartLS.add(product);
  productInCart();
}

function productInCart() {
  addButton.classList.add('product-cart-button-disable');
  viewButton.classList.remove('product-cart-link-disable');
}

window.addEventListener('load', function() {
  addButton = document.getElementById('product-add-button');
  viewButton = document.getElementById('product-view-cart');

  product.id = addButton.getAttribute('data-id');
  product.price = addButton.getAttribute('data-price') || 0.000001;
  product.title = addButton.getAttribute('data-title');
  product.cover = addButton.getAttribute('data-cover');
  product.url = addButton.getAttribute('data-url');

  if (cartLS.exists(product.id)) productInCart();
  else addButton.onclick = addToCart;
});