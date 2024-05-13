// script.js

// Manejo del carrito de compras
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

let cartItems = [];

// Función para actualizar el carrito
function updateCart() {
    // Limpiamos el contenido actual del carrito
    cartItemsElement.innerHTML = '';

    // Calculamos el total
    let total = 0;

    // Iteramos sobre los elementos del carrito y los agregamos al HTML
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });

    // Actualizamos el total en el HTML
    cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Función para manejar el clic en el botón "Agregar al Carrito"
function addToCart(event) {
    const button = event.target;
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    // Añadimos el producto al carrito
    cartItems.push({ name, price });

    // Actualizamos el carrito
    updateCart();
}

// Agregamos el evento de clic a cada botón "Agregar al Carrito"
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
