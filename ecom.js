// script.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Western Dress', price: 48.99, image: 'dress.jpg' },
        { id: 2, name: 'Shoes', price: 25.45, image: 'shoes.jpg' },
        { id: 3, name: 'Lipstick', price: 19.99, image: 'lipstick.jpg' },
        { id: 4, name: 'Watch', price: 50.98, image: 'watch.jpg' },
        { id: 5, name: 'Hand Bag', price: 60.95, image: 'handbag.jpg' }
    ];

    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const cartCount = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-button');

    let cart = [];

    function displayProducts() {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }

    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        cart.push(product);
        updateCart();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = '';
        cart.forEach((product, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartList.appendChild(cartItem);
        });

        cartCount.textContent = cart.length;
        const totalPrice = cart.reduce((total, product) => total + product.price, 0);
        totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    checkoutButton.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    });

    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;

    displayProducts();
});
