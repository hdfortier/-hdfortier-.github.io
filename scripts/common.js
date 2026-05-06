// common.js
function getCart() {
    const data = localStorage.getItem('school_cart');
    return data ? JSON.parse(data) : [];
}

function saveCart(cartArray) {
    localStorage.setItem('school_cart', JSON.stringify(cartArray));
}