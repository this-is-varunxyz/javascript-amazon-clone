import { cart, removeProductFromCart} from "./cart.js";
import { updatedeleverydates } from "./delevery.js";
import { products } from "./products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

function itemsofcart() {
  cart.forEach((cartItem) => {
    products.forEach((product) => {
      if (product.name == cartItem.name) {
        checkoutAddToCart(product, cartItem);
      }
    });
  });
}
itemsofcart();

function checkoutAddToCart(product, cartItem) {
  let html = `
     <div class="cart-item-container" data-product="${product.name}"  >
            <div class="delivery-date">
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src=${product.image}>

              <div class="cart-item-details">
                <div class="product-name">
                  ${product.name}
                </div>
                <div class="product-price">
                  $${(product.price / 100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${
                      cartItem.quantity
                    }</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary"; data-delete-btn="${
                    product.name
                  }" >
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${updatedeleverydates(dayjs(),product)}                
              </div>
            </div>
          </div>


    `;
  document.querySelector(".order-summary").innerHTML += html;
}
function deleteitem() {
  let deleteBtns = document.querySelectorAll(".delete-quantity-link");

  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", () => {
      onclickdelete(deleteBtn);
    });
  });
}
function onclickdelete(deleteBtn) {
  let deleteProduct = deleteBtn.dataset.deleteBtn;
  let container = document.querySelector(`[data-product="${deleteProduct}"]`);

  container.remove()

  removeProductFromCart(deleteProduct);
  // console.log(cart);
}
deleteitem();