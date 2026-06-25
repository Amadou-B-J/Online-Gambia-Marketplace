alert("JavaScript Loaded!");

// =========================
// CART DATA
// =========================

let cart = [];
let cartCount = 0;
let totalPrice = 0;

// =========================
// HTML ELEMENTS
// =========================

const cartButton =
    document.getElementById("cart-button");

const cartSidebar =
    document.getElementById("cart-sidebar");

const overlay =
    document.getElementById("overlay");

const closeCart =
    document.getElementById("close-cart");

const cartDisplay =
    document.getElementById("cart-count");

const cartItems =
    document.getElementById("cart-items");

const cartTotal =
    document.getElementById("cart-total");

const addButtons =
    document.querySelectorAll(".add-cart");

// =========================
// LOAD SAVED CART
// =========================

const savedCart =
    localStorage.getItem("shoppingCart");

if (savedCart) {

    cart = JSON.parse(savedCart);

}

// =========================
// CART OPEN / CLOSE
// =========================

function openCart() {

    cartSidebar.classList.add("active");

    overlay.classList.add("active");

}

function closeCartSidebar() {

    cartSidebar.classList.remove("active");

    overlay.classList.remove("active");

}

cartButton.addEventListener(
    "click",
    openCart
);

closeCart.addEventListener(
    "click",
    closeCartSidebar
);

overlay.addEventListener(
    "click",
    closeCartSidebar
);

// =========================
// ADD TO CART
// =========================

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const productCard =
            button.parentElement;

        const productName =
            productCard
            .querySelector(".product-name")
            .textContent;

        const productPrice =
            parseFloat(
                productCard
                .querySelector(".product-price")
                .textContent
            );

        const existingProduct =
            cart.find(
                item =>
                item.name === productName
            );

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name: productName,
                price: productPrice,
                quantity: 1
            });

        }

        updateCart();

        openCart();

    });

});

// =========================
// UPDATE CART
// =========================

function updateCart() {

    cartItems.innerHTML = "";

    cartCount = 0;

    totalPrice = 0;

    cart.forEach(item => {

        const listItem =
            document.createElement("li");

        const itemTotal =
            item.price * item.quantity;

        const itemText =
            document.createElement("span");

        itemText.textContent =
            `${item.name} - GMD ${itemTotal.toLocaleString()}`;

        const minusButton =
            document.createElement("button");

        minusButton.textContent = "-";

        const quantityText =
            document.createElement("span");

        quantityText.textContent =
            ` ${item.quantity} `;

        const plusButton =
            document.createElement("button");

        plusButton.textContent = "+";

        // PLUS BUTTON

        plusButton.addEventListener(
            "click",
            () => {

                item.quantity++;

                updateCart();

            }
        );

        // MINUS BUTTON

        minusButton.addEventListener(
            "click",
            () => {

                item.quantity--;

                if (
                    item.quantity <= 0
                ) {

                    cart = cart.filter(
                        product =>
                        product.name !== item.name
                    );

                }

                updateCart();

            }
        );

        listItem.appendChild(itemText);

        listItem.appendChild(minusButton);

        listItem.appendChild(quantityText);

        listItem.appendChild(plusButton);

        cartItems.appendChild(listItem);

        cartCount += item.quantity;

        totalPrice += itemTotal;

    });

    cartDisplay.textContent =
        cartCount;

    cartTotal.textContent =
        totalPrice.toLocaleString();

    saveCart();

}

// =========================
// SAVE CART
// =========================

function saveCart() {

    localStorage.setItem(
        "shoppingCart",
        JSON.stringify(cart)
    );

}

// =========================
// INITIAL LOAD
// =========================

updateCart();