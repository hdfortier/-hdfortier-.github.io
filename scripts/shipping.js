// shipping.js

function initShippingPage() {
    displayShippingPage();

    const sameBox = document.getElementById("sameAsShipping");
    if (sameBox) {
        sameBox.addEventListener("change", copyShippingToBilling);
    }

    const orderBtn = document.getElementById("placeOrderBtn");
    if (orderBtn) {
        orderBtn.addEventListener("click", submitShippingForm);
    }
}

function displayShippingPage() {
    const summaryBox = document.getElementById("shipping-summary");
    if (!summaryBox) return;

    const cart = getCart();
    let total = 0;

    let html = cart.map(item => {
        const itemTotal = parseFloat(item.price) * parseInt(item.qty);
        total += itemTotal;

        return `
            <div class="summary-line">
                <span>${item.name} x ${item.qty}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>`;
    }).join("");

    html += `
        <div class="summary-line">
            <strong>Total</strong>
            <strong>$${total.toFixed(2)}</strong>
        </div>`;

    summaryBox.innerHTML = html;
}

function submitShippingForm() {
    if (!validateForm()) {
        return;
    }

    const fullName = document.getElementById("fullName").value;

    document.getElementById("shipping-message").innerHTML =
        "<div class='message-box'>Order placed for " + fullName + "!</div>";

    localStorage.removeItem("school_cart");

    document.getElementById("shipping-form").reset();
    document.getElementById("billing-form").reset();

    displayShippingPage();
}

function copyShippingToBilling() {
    if (document.getElementById("sameAsShipping").checked) {
        document.getElementById("billName").value = document.getElementById("fullName").value;
         document.getElementById("billEmail").value =
        document.getElementById("email").value;
        document.getElementById("billPhone").value =
        document.getElementById("phone").value;
        document.getElementById("billAddress").value = document.getElementById("address").value;
        document.getElementById("billCity").value = document.getElementById("city").value;
        document.getElementById("billState").value = document.getElementById("state").value;
        document.getElementById("billZip").value = document.getElementById("zipCode").value;
    }
}

function validateForm() {

    let name = document.getElementById("fullName").value;
    let address = document.getElementById("address").value;
    let zip = document.getElementById("zipCode").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Basic empty check
    if (name === "" || address === "" || zip === "" || email === "" || phone === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    // Email validation (simple)
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Phone validation (only digits, length check)
    let cleanedPhone = phone.replace(/\D/g, ""); // removes dashes, spaces, etc.

    if (cleanedPhone.length !== 10) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}