const orderNowButton = document.getElementById("orderNowButton");
const listAllMenu = document.getElementById("listAllMenu");

if (orderNowButton) {
    orderNowButton.addEventListener("click", () => {
        location.href = "#favourite-order";
    })
}
if (listAllMenu) {
    listAllMenu.addEventListener("click", () => {
        location.href = "#all-menu";
    })
}

// Button Plus & Minus Count Quantity
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const quantity = document.getElementById("quantity");

if (plusButton && minusButton && quantity) {
    plusButton.addEventListener("click", () => {
        quantity.value = parseInt(quantity.value, 10);
        quantity.value++;
    })
    minusButton.addEventListener("click", () => {
        quantity.value = parseInt(quantity.value, 10);
        if (quantity.value == 0) {
            quantity.value = 0;
        } else  {
            quantity.value--;
        }
    })
}

// Tambahkan Ke keranjang
