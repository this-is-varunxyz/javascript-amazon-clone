import { cart } from "./cart.js";
import { products } from "./products.js";
import { deliveryprice } from "./delevery.js";

export function totaldeliverypirces() {
  let totaldeliverypirces = 0;
  if (cart) {
    cart.forEach((cartItem) => {
      totaldeliverypirces += deliveryprice(cartItem);
    });
    document.querySelector(".totaldeliveryprice").innerHTML = `$${(
      totaldeliverypirces / 100
    ).toFixed(2)}`;
  } // Move this OUTSIDE the forEach loop
  return Number(totaldeliverypirces);
}

export function pricesummary() {
  let totalproductsprice = 0;

  let matchingproduct;
  cart.forEach((cartItem) => {
    products.forEach((product) => {
      if (cartItem.name == product.name) {
        matchingproduct = product;
      }
    });
    let productsprice = Number(matchingproduct.price * cartItem.quantity);

    totalproductsprice += productsprice;
  });
  document.querySelector(".totalproductsprice").innerHTML = `$${(
    totalproductsprice / 100
  ).toFixed(2)}`;
  return Number(totalproductsprice);
}

export function totalbeforetax() {
  let totalbtax = ((pricesummary() + totaldeliverypirces()) / 100).toFixed(2);

  document.querySelector(".totalbeforetax").innerHTML = `$${totalbtax}`;
  document.querySelector(".taxofitems").innerHTML = `$${(
    totalbtax / 10
  ).toFixed(2)}`;
  document.querySelector(".finaltotal").innerHTML = `$${
    (Number(totalbtax) + Number((totalbtax / 10))).toFixed(2)
  }`;
}
