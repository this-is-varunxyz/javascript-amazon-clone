export let products = [];

export function loadproducts() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", () => {
      try {
        products = JSON.parse(xhr.response);
        resolve(products); 
      } catch (error) {
        reject(error);
      }
    });

 
    xhr.open("GET", "https://supersimplebackend.dev/products");
    xhr.send();
  });
}

