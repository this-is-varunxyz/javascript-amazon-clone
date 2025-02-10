import { products, loadproducts } from "./products.js"; 
import { addToCart } from "./cart.js";

async function productsLoader() {
  try {
    await loadproducts(); 

    const productsGrid = document.querySelector(".products-grid");
    productsGrid.innerHTML = "";

    products.forEach((product) => {
      let html = `<div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select class="js-quantity" data-product-name="${product.name}">
            ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join("")}
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary" data-product-name="${product.name}">
          Add to Cart
        </button>
      </div>`;

      productsGrid.innerHTML += html;
    });

    addToCart();

  } catch (error) {
    console.error("Error loading products:", error);
  }
}

productsLoader();
