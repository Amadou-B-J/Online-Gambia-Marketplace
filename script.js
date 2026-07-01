alert("JavaScript Loaded!");

console.log("OGM Marketplace Loaded");


/* ==========================
   CART DATA
========================== */

let cart = JSON.parse(

localStorage.getItem(

"shoppingCart"

)

) || [];


/* ==========================
   ELEMENTS
========================== */

const cartButton =
document.getElementById(

"cart-button"

);

const closeCartBtn =
document.getElementById(

"close-cart"

);

const cartSidebar =
document.getElementById(

"cart-sidebar"

);

const overlay =
document.getElementById(

"overlay"

);

const cartCount =
document.getElementById(

"cart-count"

);

const cartItems =
document.getElementById(

"cart-items"

);

const cartTotal =
document.getElementById(

"cart-total"

);

const checkoutButton =
document.getElementById(

"checkout-btn"

);

const addButtons =
document.querySelectorAll(

".add-cart"

);


/* ==========================
   OPEN CART
========================== */

function openCart(){

cartSidebar.classList.add(

"active"

);

overlay.classList.add(

"active"

);

}


/* ==========================
   CLOSE CART
========================== */

function closeCartSidebar(){

cartSidebar.classList.remove(

"active"

);

overlay.classList.remove(

"active"

);

}


/* ==========================
   SAVE CART
========================== */

function saveCart(){

localStorage.setItem(

"shoppingCart",

JSON.stringify(

cart

)

);

}


/* ==========================
   RENDER CART
========================== */

function renderCart(){

cartItems.innerHTML = "";

let total = 0;

let count = 0;


cart.forEach((item,index)=>{


const itemTotal =

item.price *

item.quantity;


total += itemTotal;

count += item.quantity;


const li =

document.createElement(

"li"

);


li.innerHTML = `

<div class="cart-item">

<img src="${item.image}">

<div class="cart-info">

<h4>

${item.name}

</h4>

<div class="cart-price">

GMD ${itemTotal.toLocaleString()}

</div>

<div class="quantity">

<button
onclick="decrease(${index})">

−

</button>

<span>

${item.quantity}

</span>

<button
onclick="increase(${index})">

+

</button>

</div>

</div>

</div>

`;


cartItems.appendChild(

li

);

});


cartCount.textContent = count;

cartTotal.textContent =

total.toLocaleString();


saveCart();

}


/* ==========================
   ADD TO CART
========================== */

addButtons.forEach(button=>{


button.addEventListener(

"click",

()=>{


const product =

button.closest(

".product-card"

);


const name =

product.querySelector(

"h3"

)

.textContent;


const priceElement =

product.querySelector(

".price"

);


if(

!priceElement

){

console.error(

"Price element missing"

);

return;

}


const price =

parseInt(

priceElement

.textContent

.replace(

"GMD",

""

)

.replace(

/,/g,

""

)

.trim()

);


const image =

product.querySelector(

"img"

)

.src;


const existing =

cart.find(

item =>

item.name === name

);


if(

existing

){

existing.quantity++;

}

else{

cart.push({

name,

price,

image,

quantity:1

});

}


renderCart();

openCart();


}

);


});


/* ==========================
   INCREASE
========================== */

function increase(index){

cart[index]

.quantity++;


renderCart();

}


/* ==========================
   DECREASE
========================== */

function decrease(index){

cart[index]

.quantity--;


if(

cart[index]

.quantity <= 0

){

cart.splice(

index,

1

);

}


renderCart();

}


/* ==========================
   EVENTS
========================== */

if(

cartButton

){

cartButton.addEventListener(

"click",

openCart

);

}


if(

closeCartBtn

){

closeCartBtn.addEventListener(

"click",

closeCartSidebar

);

}


if(

overlay

){

overlay.addEventListener(

"click",

closeCartSidebar

);

}


/* ==========================
   CHECKOUT
========================== */

if(

checkoutButton

){

checkoutButton.addEventListener(

"click",

()=>{


if(

cart.length===0

){

alert(

"Cart is empty"

);

return;

}


alert(

"Checkout coming soon!"

);


}

);

}


/* ==========================
   HERO SLIDER
========================== */

const slides =

document.querySelectorAll(

".slide"

);


const dots =

document.querySelectorAll(

".dot"

);


let current = 0;


function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove(

"active"

);

});


dots.forEach(dot=>{

dot.classList.remove(

"active"

);

});


slides[index]

.classList.add(

"active"

);


dots[index]

.classList.add(

"active"

);

}


/* ==========================
   DOTS NAVIGATION
========================== */

if(

dots.length > 0

){

dots.forEach((dot,index)=>{


dot.addEventListener(

"click",

()=>{


current = index;


showSlide(

current

);


}


);


});


}


/* ==========================
   AUTO SLIDER
========================== */

if(

slides.length > 0

){

showSlide(0);


setInterval(()=>{


current++;


if(

current >= slides.length

){

current = 0;

}


showSlide(

current

);


},4000);


}


/* ==========================
   INITIALIZE
========================== */

renderCart();

console.log(

"OGM Ready"

);