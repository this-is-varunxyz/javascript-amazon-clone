import { cart } from "./cart.js";
import { products } from "./products.js";
import { deliveryprice } from "./delevery.js";

export function totaldeliverypirces() {
  let totaldeliverypirces = 0;

  if (cart.length > 0) {
    cart.forEach((cartItem) => {
      totaldeliverypirces += deliveryprice(cartItem);
    });
  }

  document.querySelector(".totaldeliveryprice").innerHTML = `$${(
    totaldeliverypirces / 100
  ).toFixed(2)}`;
  
  return totaldeliverypirces;
}

export function pricesummary() {
  let totalproductsprice = 0;

  cart.forEach((cartItem) => {
    const matchingproduct = products.find(
      (product) => cartItem.name.trim() === product.name.trim()
    );

   

    let productsprice = matchingproduct.priceCents * cartItem.quantity;
    totalproductsprice += productsprice;
  });

  document.querySelector(".totalproductsprice").innerHTML = `$${(
    totalproductsprice / 100
  ).toFixed(2)}`;

  return totalproductsprice;
}

export function totalbeforetax() {
  let totalbtax = pricesummary() + totaldeliverypirces();

  document.querySelector(".totalbeforetax").innerHTML = `$${(totalbtax / 100).toFixed(2)}`;
  document.querySelector(".taxofitems").innerHTML = `$${(totalbtax / 1000).toFixed(2)}`;
  document.querySelector(".finaltotal").innerHTML = `$${(
    (totalbtax + totalbtax / 10) / 100
  ).toFixed(2)}`;
}
