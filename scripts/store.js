// store.js

function addToCart(name, price, idNum, image) {
    // 1. Get the values the user picked from the dropdowns
    const chosenQty = parseInt(document.getElementById('qty-' + idNum).value);

    // 2. Get the current cart from storage
    let cart = getCart();

    // 3. Check if the exact same item (name, color, and size) is already in the cart
    let existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // If the item is already in the cart, add to the quantity.
        existingItem.qty = parseInt(existingItem.qty) + chosenQty;
    } else {
        // If the item is not in the cart, create a new item object.
        const newItem = {
            id: idNum,
            name: name,
            price: price,
            qty: chosenQty,
            image: image,
        };
        cart.push(newItem);
    }

    saveCart(cart);

    alert(name + " added to cart!")

    
}