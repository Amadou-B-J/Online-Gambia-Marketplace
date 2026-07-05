console.log("OGM Loaded");

/* ==========================
LOGIN DROPDOWN
========================== */

const loginSelect =
document.getElementById(
"login-select"
);

if(loginSelect){

loginSelect.addEventListener(

"change",

function(){

const value =
this.value;

if(
value === "customer"
){

window.location.href =
"customer-login.html";

}

else if(
value === "seller"
){

window.location.href =
"seller-login.html";

}

else if(
value === "delivery"
){

window.location.href =
"delivery-login.html";

}

}

);

}


/* ==========================
PASSWORD VALIDATION
========================== */

const password =
document.getElementById(
"password"
);

const confirmPassword =
document.getElementById(
"confirm-password"
);

const message =
document.getElementById(
"password-message"
);


/* ==========================
LIVE PASSWORD MATCH
========================== */

if(

password &&

confirmPassword &&

message

){

confirmPassword.addEventListener(

"keyup",

()=>{

if(

password.value === ""

){

message.textContent = "";

return;

}

if(

password.value ===

confirmPassword.value

){

message.textContent =

"✓ Passwords match";

message.style.color =

"green";

}

else{

message.textContent =

"✗ Passwords do not match";

message.style.color =

"red";

}

}

);

}


/* ==========================
CUSTOMER REGISTRATION
========================== */

const customerRegisterForm =
document.getElementById(

"customer-register-form"

);

if(

customerRegisterForm

){

customerRegisterForm

.addEventListener(

"submit",

function(e){

e.preventDefault();

if(

password.value !==

confirmPassword.value

){

alert(

"Passwords do not match"

);

return;

}

const customer = {

email:

document.getElementById(

"email"

).value,

password:

document.getElementById(

"password"

).value

};

localStorage.setItem(

"customer",

JSON.stringify(

customer

)

);

alert(

"Registration Successful"

);

window.location.href =

"customer-login.html";

}

);

}


/* ==========================
CUSTOMER LOGIN
========================== */

const customerLoginForm =
document.getElementById(

"customer-login-form"

);

if(

customerLoginForm

){

customerLoginForm

.addEventListener(

"submit",

function(e){

e.preventDefault();

const email =

document.getElementById(

"customer-email"

).value;

const userPassword =

document.getElementById(

"customer-password"

).value;

const customer =

JSON.parse(

localStorage.getItem(

"customer"

)

);

if(

customer &&

customer.email === email &&

customer.password === userPassword

){

alert(

"Login Successful"

);

window.location.href =

"customer-dashboard.html";

}

else{

alert(

"Invalid Email or Password"

);

}

}

);

}

/* ==========================
SELLER PASSWORD VALIDATION
========================== */

const sellerPassword =
document.getElementById(
"seller-password"
);

const sellerConfirm =
document.getElementById(
"seller-confirm-password"
);

const sellerMessage =
document.getElementById(
"seller-password-message"
);

if(

sellerPassword &&

sellerConfirm &&

sellerMessage

){

sellerConfirm.addEventListener(

"keyup",

()=>{

if(

sellerPassword.value === ""

){

sellerMessage.textContent = "";

return;

}

if(

sellerPassword.value ===

sellerConfirm.value

){

sellerMessage.textContent =

"✓ Passwords match";

sellerMessage.style.color =

"green";

}

else{

sellerMessage.textContent =

"✗ Passwords do not match";

sellerMessage.style.color =

"red";

}

}

);

}

const sellerForm =
document.getElementById(
"seller-register-form"
);

if(sellerForm){

sellerForm.addEventListener(

"submit",

function(e){

if(

sellerPassword.value !==

sellerConfirm.value

){

e.preventDefault();

alert(

"Passwords do not match"

);

}

}

);

}

/* ==========================
SELLER LOGIN
========================== */

const sellerLoginForm =
document.getElementById(

"seller-login-form"

);

if(

sellerLoginForm

){

sellerLoginForm

.addEventListener(

"submit",

function(e){

e.preventDefault();

alert(

"Seller authentication will be added later."

);

}

);

}

/* ==========================
DELIVERY PASSWORD VALIDATION
========================== */

const deliveryPassword =
document.getElementById(
"delivery-password"
);

const deliveryConfirm =
document.getElementById(
"delivery-confirm-password"
);

const deliveryMessage =
document.getElementById(
"delivery-password-message"
);

if(

deliveryPassword &&

deliveryConfirm &&

deliveryMessage

){

deliveryConfirm.addEventListener(

"keyup",

()=>{

if(

deliveryPassword.value === ""

){

deliveryMessage.textContent = "";

return;

}

if(

deliveryPassword.value ===

deliveryConfirm.value

){

deliveryMessage.textContent =

"✓ Passwords match";

deliveryMessage.style.color =

"green";

}

else{

deliveryMessage.textContent =

"✗ Passwords do not match";

deliveryMessage.style.color =

"red";

}

}

);

}

const deliveryForm =
document.getElementById(
"delivery-register-form"
);

if(deliveryForm){

deliveryForm.addEventListener(

"submit",

function(e){

if(

deliveryPassword.value !==

deliveryConfirm.value

){

e.preventDefault();

alert(

"Passwords do not match"

);

}

}

);

}

/* ==========================
DELIVERY LOGIN
========================== */

const deliveryLoginForm =
document.getElementById(

"delivery-login-form"

);

if(

deliveryLoginForm

){

deliveryLoginForm

.addEventListener(

"submit",

function(e){

e.preventDefault();

alert(

"Delivery authentication will be added later."

);

}

);

}


/* ==========================
LOGOUT
========================== */

const logoutButton =
document.getElementById(

"logout"

);

if(

logoutButton

){

logoutButton.addEventListener(

"click",

()=>{

localStorage.removeItem(

"customer"

);

window.location.href =

"index.html";

}

);

}


/* ==========================
READY
========================== */

console.log(

"OGM Ready"

);