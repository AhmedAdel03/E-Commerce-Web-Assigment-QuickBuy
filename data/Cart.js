 import {UpdatePaymentSummary } from "/Scripts/payment.js";
export let Cart=JSON.parse(localStorage.getItem('Cart'));

if(!Cart){
    Cart=
[{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:2
},{
    productId:"83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity:1
}
];

}
export function CartQunatity()
{
    
    let CartQunatity=0;
     CartQunatity=Cart.length  ;
     document.querySelector(".js-cart-count").innerHTML=CartQunatity ;
 }

 
export function updateLocalStorage()
{
    localStorage.setItem('Cart',JSON.stringify(Cart));

}

 



export function AddToCart(productId,Quantity)
{
let matchingItem;
Cart.forEach((product) => {
   if(product.productId===productId) 
   {
    matchingItem=product
   }
})
if(matchingItem)
{
    matchingItem.quantity+=Quantity;
}
else {
    Cart.push({
        productId:productId,
        quantity:Quantity
    })

}
updateLocalStorage()
CartQunatity()
UpdatePaymentSummary();
console.log(Cart)
}
export function removeFromCart(productId)
{
    const newArray=[];
    
    Cart.forEach((product)=>{
       if(product.productId!==productId)
       {
        newArray.push(product)
       }
    })
    Cart=newArray;
    updateLocalStorage();

}
 