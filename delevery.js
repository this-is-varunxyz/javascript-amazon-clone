export let deleveryOptions = [
  {
    id: "1",
    day: 7,
    price: 0,
  },
  {
    id: "2",
    day: 3,
    price: 499,
  },
  {
    id: "3",
    day: 1,
    price: 999,
  },
];

export function updatedeleverydates(dayjs, product,cart) {
  let html = "";
 
  

  deleveryOptions.forEach((deleveryOption) => {
    const today = dayjs;
    const deleveryDate = today.add(deleveryOption.day, "days");
    const dateformat = deleveryDate.format("dddd, MMMM D");

    const delveryPrice =
      deleveryOption.price === 0
        ? "Free"
        : `$${(deleveryOption.price / 100).toFixed(2)}`;

    html += `
    <div class="delivery-option">
                  <input type="radio" ${deleveryOption.id == cart.deleveryOptionsid? "checked":''}
                    class="delivery-option-input"
                    name="delivery-option-${product.name}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateformat}
                    </div>
                    <div class="delivery-option-price">
                      ${delveryPrice} - Shipping
                    </div>
                  </div>
                </div>
    
    `;
   
    
  });
  return html;
}
