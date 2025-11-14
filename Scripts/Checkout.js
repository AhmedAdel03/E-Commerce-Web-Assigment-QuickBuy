 import {CartProducts  } from "/data/Cart.js";
console.log(CartProducts)
CartProducts.forEach((item) => {
  const productId = item.productId;
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product
    }
  })
  let html = `
     <div class="cart-item-container  js-item-container-${productId}">
            <div class="delivery-date" >
              Delivery date: Tuesday, June 21
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-price">
                  ${matchingProduct.priceCents / 100}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${item.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-Button" data-product-id="${productId}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options js-delivery-Option-Button">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div class="js-delivery-option-All">
    <div class="delivery-option">
      <input type="radio" class="delivery-option-input" data-deliveryprice="${delivery.Tommorow.deliveryprice}"
        name="delivery-option-${item.productId}">
      <div>
        <div class="delivery-option-date js-delivery-option" ">
                        ${delivery.Tommorow.deliverytime}
                      </div>
                      <div class=" delivery-option-price">
          ${delivery.Tommorow.deliveryprice}$ - Shipping
        </div>
      </div>
    </div>


    <div class="delivery-option">
      <input type="radio" class="delivery-option-input" data-deliveryprice="${delivery.AfterThreeDays.deliveryprice}"
        name="delivery-option-${item.productId}">
      <div>
        <div class="delivery-option-date js-delivery-option" ">
                      ${delivery.AfterThreeDays.deliverytime}
                    </div>
                    <div class=" delivery-option-price">
          ${delivery.AfterThreeDays.deliveryprice}$ - Shipping
        </div>
      </div>
    </div>


    <div class="delivery-option ">
      <input type="radio" checked class="delivery-option-input " data-deliveryprice="${0}"
        name="delivery-option-${item.productId}">
      <div>
        <div class="delivery-option-date js-delivery-option" ">
                      ${delivery.AfterWeek.deliverytime}
                    </div>
                    <div class=" delivery-option-price">
          ${delivery.AfterWeek.deliveryprice}
        </div>
      </div>
    </div>

  </div>

                    
                
                
    </div>
                
                
              </div>
            </div>
          </div>
    
    `
  document.querySelector(".js-order-summary").innerHTML += html;

}); 