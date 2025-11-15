import { Cart } from "/data/Cart.js";
import { products } from "/data/ProductsData.js";
 function TotalBeforeTax(totalShippingCost,itemsPrice)
 {
  let TotalBeforeTax=Number(totalShippingCost+(itemsPrice/100)).toFixed(2);
  let tax=1.1;
  document.querySelector(".js-before-tax").innerHTML=`$${TotalBeforeTax}`;
  document.querySelector(".js-total-order").innerHTML=`$${(TotalBeforeTax*tax).toFixed(2)}`
 }
let totalShippingCost=0;
 export function UpdatePaymentSummary() {
    let itemsPrice = 0;
let itemsCount = Cart.length;

Cart.forEach((product) => {
  products.forEach((element)=>{
if (product.productId === element.id) {
    itemsPrice += element.priceCents * (product.quantity || 1);
  }
  })
  
});
document.querySelectorAll(".delivery-option-input").forEach((button) => {
  button.addEventListener('change', () => {
    
    
     document.querySelectorAll(".delivery-option").forEach((inputOption)=>{

      const selectedinput=inputOption.querySelector(".delivery-option-input:checked");
      if(selectedinput){
       let data = selectedinput.dataset.deliveryprice
     totalShippingCost+=Number(data);
     
     
      }
      
     })
   document.querySelector(".js-shipping-cost").innerHTML=`$${totalShippingCost}`
   TotalBeforeTax(totalShippingCost,itemsPrice);
   totalShippingCost=0;
  })


})
let html=`

          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${itemsCount}):</div>
            <div class="payment-summary-money">$${(itemsPrice/100)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money js-shipping-cost">$0</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money js-before-tax">$0</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${((itemsPrice/100)*0.1).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money js-total-order">$${((itemsPrice/100*1.1).toFixed(2))}</div>
          </div>

          <button class="place-order-button button-primary js-place-btn">
            Place your order
          </button>
        </div>
`
document.querySelector(".js-payment-Summary").innerHTML=html;
 }

 
 
 
