let products = [
  {
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    price: 1090,
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    rating: {
      stars: 4.5,
      count: 87,
    },
  },
  {
    name: "Intermediate Size Basketball",
    price: 2095,
    image: "images/products/intermediate-composite-basketball.jpg",
    rating: {
      stars: 4.0,
      count: 127,
    },
  },
  {
    name: " Adults Plain Cotton T-Shirt - 2 Pack",
    price: 799,
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    rating: {
      stars: 4.5,
      count: 56,
    },
  },
];
let cart = [];
let value = 1;
function productsLoader() {
  products.forEach((product) => {
    let html = `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src= ${product.image} >
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
            $${(product.price / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container" >
            <select class="js-quantity">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-product-name="${
            product.name
          }">
            Add to Cart
          </button>
        </div>`;

    document.querySelector(".products-grid").innerHTML += html;
  });
}
function addToCart() {
  let btn = document.querySelectorAll(".add-to-cart-button");
  btn.forEach((buttons) => {
    buttons.addEventListener("click", () => {
      let quantity = 1;
      const dataset = buttons.dataset;

      let exist = false;

      let existitem;

      value = 1;
      

      cart.forEach((item) => {
        if (item.name == dataset.productName) {
          exist = true;
          existitem = item;

          return;
        }
      });
      if (exist == true) {
        existitem.quantity += value;
      } else {
        cart.push({ name: dataset.productName, quantity });
      }
      console.log(cart);
      totalCartQuantity();
    });
  });
}
function totalCartQuantity() {
  let cartQuantity = 1;
  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });
  document.querySelector(".cart-quantity").innerHTML = cartQuantity;
}

productsLoader();
addToCart();
