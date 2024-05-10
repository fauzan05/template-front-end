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
const plusButtons = document.getElementsByClassName("plus-button");
const minusButtons = document.getElementsByClassName("minus-button");
const quantities = document.getElementsByClassName("quantity");

if (plusButtons && minusButtons && quantities) {
    Array.from(quantities).forEach((quantity, index) => {
        if (quantity.value == 1) {
            minusButtons[index].classList.remove("text-danger");
            minusButtons[index].classList.add("text-secondary");
        } else if (quantity.value > 1) {
            minusButtons[index].classList.add("text-danger");
            minusButtons[index].classList.remove("text-secondary");
        }
    })
    Array.from(plusButtons).forEach((plusButton, index) => {
        plusButton.addEventListener("click", () => {
            if (quantities[index].value >= 1) {
                minusButtons[index].classList.add("text-danger");
                minusButtons[index].classList.remove("text-secondary");
            }
            quantities[index].value++;
        })
    })
    Array.from(minusButtons).forEach((minusButton, index) => {
        minusButton.addEventListener("click", () => {
            if (quantities[index].value == 1 || quantities[index].value == 2) {
                minusButton.classList.remove("text-danger");
                minusButton.classList.add("text-secondary");
                quantities[index].value = 1;
            } else {
                if (quantities[index].value > 1) {
                    minusButtons[index].classList.add("text-danger");
                    minusButtons[index].classList.remove("text-secondary");
                }
                quantities[index].value--;
            }
        })
    })

}

// Tambah Catatan
const addNoteButton = document.getElementById("add-note");
const addNoteInput = document.getElementById("add-note-input");
if (addNoteButton && addNoteInput) {
    state = Boolean(false)
    addNoteButton.addEventListener("click", () => {
        state = !state;
        if (state) {
            addNoteInput.classList.remove("d-none")
            addNoteInput.classList.add("d-block")
        } else {
            addNoteInput.classList.remove("d-block")
            addNoteInput.classList.add("d-none")
        }
        // console.log(state)
    })
}

// digunakan agar modal selalu aktif tanpa harus ditekan terlebih dahulu
// window.onload = function() {
//     var myModal = new bootstrap.Modal(document.getElementById('transactionDetailModal'));
//     myModal.show();
// };