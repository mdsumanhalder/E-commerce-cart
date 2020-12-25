// show cart 
(function(){
    const cartInfo=document.querySelector('#cart-info');
    const cart=document.getElementById('cart');
    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
    })
})();
// add items to the cart 
(function(){
const cartBtn=document.querySelectorAll('.store-item-icon');

cartBtn.forEach(btn=>{
  btn.addEventListener('click',function(e){
    //   console.log(e.target)
    if(e.target.parentElement.classList.contains('store-item-icon')){
    let fullpath=e.target.parentElement.previousElementSibling.src;
    let position=fullpath.indexOf('img')+3;
    let partialPath=fullpath.slice(position);
    // console.log(partialPath)
    const item={};
    item.img =`img-cart${partialPath}`;

    // adding product price
    let name=e.target.parentElement.parentElement.nextElementSibling.
    children[0].children[0].textContent;

    // adding product name 
    item.name=name;
    let price=e.target.parentElement.parentElement.nextElementSibling.
    children[0].children[1].textContent;

    // cutting space from price 
    let finalPrice=price.slice(1).trim();
    item.price=finalPrice;
    // console.log(name)
    // console.log(price)
    // console.log(item)

    // create cart-item 
    const cartItem=document.createElement('div');
    cartItem.classList.add('cart-item','d-flex','justify-content-between',
    'text-capitalize','my-3'
    );
    cartItem.innerHTML=`<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
    <div class="cart-item-text">

      <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
      <span>$</span>
      <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
    </div>
    <a href="#" id='cart-item-remove' class="cart-item-remove">
      <i class="fas fa-trash"></i>
    </a>
  </div>
  `;
 
  
//   select cart 
 const cart=document.getElementById('cart');
 const total=document.querySelector('.cart-total-container');
 cart.insertBefore(cartItem,total);
 alert('would you like to add this item in cart?');
 showTotal();
    }
  })  
})
// show total function
function showTotal(){
    const total=[];
    const items=document.querySelectorAll('.cart-item-price');
  items.forEach(function(item){
      total.push(parseFloat(item.textContent));
  }) ;
//   console.log(total);

const totalMoney=total.reduce(function(total,item){
    total +=item;
return total;
},0);
const finalMoney =totalMoney.toFixed(2);
document.getElementById('cart-total').textContent=finalMoney;
document.querySelector('.item-total').textContent=finalMoney;
document.getElementById('item-count').textContent=total.length;
// console.log(finalMoney)
}

})()