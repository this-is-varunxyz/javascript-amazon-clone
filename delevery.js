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
                     data-delivery-id="${deleveryOption.id}"
                     data-delivery-pname='${product.name}'
                    name="delivery-option-${product.name}"
                    value="${deleveryOption.id}">
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
// export function updateTopBarDate(dayjs) {
//   // First set default dates for all items (7-day delivery)
//   const cartContainers = document.querySelectorAll('.cart-item-container');
//   cartContainers.forEach(container => {
//     const deliveryDateDiv = container.querySelector('.delivery-date');
//     const today = dayjs;
//     const deleveryDate = today.add(7, "days");
//     const dateformat = deleveryDate.format("dddd, MMMM D");
//     deliveryDateDiv.innerHTML = `Delivery date: ${dateformat}`;
//   });

//   // Then set up event listeners for changes
//   let selectInputs = document.querySelectorAll(`.delivery-option-input`);
  
//   selectInputs.forEach(selectInput => {
    
//     selectInput.addEventListener("change", (event) => {

//       const selectedOption = event.target;

//       const cartItemContainer = selectedOption.closest('.cart-item-container');
//       const deliveryDateDiv = cartItemContainer.querySelector('.delivery-date');
      
//       const today = dayjs;
      
//       if(selectedOption.value == 1) {
//         const deleveryDate = today.add(7, "days");
//         const dateformat = deleveryDate.format("dddd, MMMM D");
//         deliveryDateDiv.innerHTML = `Delivery date: ${dateformat}`;
//       }
//       if(selectedOption.value == 2) {
//         const deleveryDate = today.add(3, "days");
//         const dateformat = deleveryDate.format("dddd, MMMM D");
//         deliveryDateDiv.innerHTML = `Delivery date: ${dateformat}`;
//       }
//       if(selectedOption.value == 3) {
//         const deleveryDate = today.add(1, "days");
//         const dateformat = deleveryDate.format("dddd, MMMM D");
//         deliveryDateDiv.innerHTML = `Delivery date: ${dateformat}`;
//       }
//     });
//   });
// }

