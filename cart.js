import { totaldeliverypirces,pricesummary ,totalbeforetax} from "./price-summary.js";

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
        cart.push({
          name: dataset.productName,
          quantity: quantitySelect,
          deleveryOptionsid: "1",
        });
      }
      saveToStorage();

      totalCartQuantity();
    });
  });
}
totalCartQuantity();
function totalCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((item) => {
    if (item && item.quantity) {
      cartQuantity += Number(item.quantity);
    }
  });
  if (document.querySelector(".cart-quantity")) {
    document.querySelector(".cart-quantity").innerHTML = cartQuantity;
  }
  if (document.querySelector(".return-to-home-link-items")) {
    document.querySelector(".return-to-home-link-items").innerHTML =
      cartQuantity;
  }
  if (document.querySelector(".payment-summary-items")) {
    document.querySelector(
      ".payment-summary-items"
    ).innerHTML = `Items (${cartQuantity}):`;
  }
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
  totalCartQuantity();
  pricesummary();
  totalbeforetax();
}
function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}
export function updatedeliverytocart() {
  cart.forEach((cartItem) => {
    let selectInputs = document.querySelectorAll(`.delivery-option-input`);
    selectInputs.forEach((selectInput) => {
      selectInput.addEventListener("change", (event) => {
        let selectedOption = event.target;

        if (cartItem.name == selectedOption.dataset.deliveryPname) {
          cartItem.deleveryOptionsid = selectedOption.value;
          console.log(selectedOption.dataset.deliveryPname);
          console.log(cart);
          saveToStorage();
          totaldeliverypirces();
          totalbeforetax();
        }
      });
    });
  });
}

