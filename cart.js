export let cart = JSON.parse(localStorage.getItem("cart")) || [];
export function addToCart() {
  let btn = document.querySelectorAll(".add-to-cart-button");
  btn.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      let quantity = 1;
      const dataset = buttons.dataset;

      let exist = false;
      const productName = buttons.dataset.productName;

      let existitem;

      let quantitySelect = Number(
        document.querySelector(
          `.js-quantity[data-product-name="${productName}"]`
        ).value
      );

      cart.forEach((item) => {
        if (item.name == dataset.productName) {
          exist = true;
          existitem = item;

          return;
        }
      });
      if (exist == true) {
        existitem.quantity += quantitySelect;
      } else {
        cart.push({ name: dataset.productName, quantity: quantitySelect });
      }
      saveToStorage();

      totalCartQuantity();
    });
  });
}
export function totalCartQuantity() {
   let cartQuantity = 0;
  cart.forEach((item) => {
    if (item && item.quantity) {
      cartQuantity += Number(item.quantity);
    }

  });
  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}

export function removeProductFromCart(productName) {
  let newcart = [];
  cart.forEach((cartItem) => {
    if (cartItem.name != productName) {
      newcart.push(cartItem);
    }
  });
  cart = newcart;
  saveToStorage();
}
function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
