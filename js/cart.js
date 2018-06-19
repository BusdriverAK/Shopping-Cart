/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    var tRow = document.querySelectorAll('#cart tbody tr');
    for (var i = 0; i <= tRow.length; i++){
        if (tRow[i]){
            tRow[i].remove();
        }
    }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
    // TODO: Find the table body
    // TODO: Iterate over the items in the cart
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    var tBody = document.querySelector('#cart tbody');
    for (var i in cart.items){
        var tr = document.createElement('tr');
        var dTD = document.createElement('td');

        dTD.textContent = 'x';
        dTD.classList.add('remover');
        dTD.id = i;

        var qTD = document.createElement('td');
        qTD.textContent = cart.items[i].quantity;

        var iTD = docuement.createElement('td');
        iTD.textContent = cart.items[i].product;

        //need to append everything
        tBody.appendChild(tr);
        tr.appendChild(dTD);
        tr.appendChild(qTD);
        tr.appendChild(iTD);
    }

}

function removeItemFromCart(event) {

    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    // TODO: Save the cart back to local storage
    // TODO: Re-draw the cart table
    if (event.target.classList.contains('remover')){
        cart.removeItem(parseInt(event.target.id));
        cart.saveToLocalStorage();
        rederCart();
    }

}

// This will initialize the page and draw the cart on screen
renderCart();