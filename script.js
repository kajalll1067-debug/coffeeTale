// MOBILE NAVBAR

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("show");

}


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        document.getElementById("navLinks").classList.remove("show");

    });

});


// PRODUCT FILTER

const filterButtons = document.querySelectorAll(".filter-btn");

const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.filter;

        products.forEach(product => {

            if (
                category === "all" ||
                product.dataset.category === category
            ) {

                product.classList.remove("hidden");

            } else {

                product.classList.add("hidden");

            }

        });

    });

});


// SHOPPING CART

let cart = [];

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    document.getElementById("cartCount").innerText = cart.length;

    showToast(name + " added to your cart ☕");

}


// SHOW CART

function showCart() {

    if (cart.length === 0) {

        alert("Your coffee cart is empty! ☕");

        return;

    }

    let total = 0;

    let message = "YOUR COFFEETALE CART\n\n";

    cart.forEach((item, index) => {

        message += `${index + 1}. ${item.name} - ₹${item.price}\n`;

        total += item.price;

    });

    message += `\nTotal: ₹${total}`;

    alert(message);

}


// TOAST NOTIFICATION

function showToast(message) {

    const toast = document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}