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
//     var myModal = new bootstrap.Modal(document.getElementById('deleteAddressModal'));
//     myModal.show();
// };

// Deskripsi
const showDescriptionButtons = document.getElementsByClassName("show-description")
if (showDescriptionButtons) {
    Array.from(showDescriptionButtons).forEach((showDescriptionButton, index) => {
        showDescriptionButton.addEventListener("click", () => {
            let showDescriptionModal = new bootstrap.Modal(document.getElementById("showDescriptionModal"))
            showDescriptionModal.show()
        })
    })
}

// Review
const showRewiewButtons = document.getElementsByClassName("average-stars")
if (showRewiewButtons) {
    Array.from(showRewiewButtons).forEach(showReviewButton => {
        showReviewButton.addEventListener("click", () => {
            let showReviewModal = new bootstrap.Modal(document.getElementById("showReviewModal"))
            showReviewModal.show()
        })
    })
}

// hide/show button reviews rating
const displayReviewButton = document.getElementById("displayReviewButton")
const displayReview = document.getElementById("displayReview")
if (displayReviewButton && displayReview) {
    let state = Boolean(true);
    displayReviewButton.addEventListener("click", () => {
        if (state) {
            // jika true / terbuka 
            displayReview.classList.add("hide");
            displayReviewButton.innerHTML = `Tampilkan <i class="fa-solid fa-angle-down"></i>`
            state = !state;
        } else if (!state) {
            // jika false / hide
            displayReview.classList.remove("hide");
            displayReviewButton.innerHTML = `Sembunyikan <i class="fa-solid fa-angle-up"></i>`
            state = !state
        }
       
    })
}

const giveReviewButton = document.getElementsByClassName("give-review-button")
if (giveReviewButton) {
    Array.from(giveReviewButton).forEach(giveReviewButton => {
        giveReviewButton.addEventListener("click", () => {
            let showReviewModal = new bootstrap.Modal(document.getElementById("giveReviewModal"))
            showReviewModal.show()
        })
    })
}

// Alamat
const editAddressButtons = document.getElementsByClassName("edit-address")
const editAddressModal = document.getElementById("editAddressModal")
const deleteAddressButtons = document.getElementsByClassName("delete-address")
if (editAddressButtons && editAddressModal || deleteAddressButtons) {
    Array.from(editAddressButtons).forEach(editAddressButton => {
        editAddressButton.addEventListener("click", () => {
            let showReviewModal = bootstrap.Modal.getOrCreateInstance('#editAddressModal')
            showReviewModal.show()
        })
    })

    Array.from(deleteAddressButtons).forEach(deleteAddressButton => {
        deleteAddressButton.addEventListener("click", () => {
            let showReviewModal = bootstrap.Modal.getOrCreateInstance('#deleteAddressModal')
            showReviewModal.show()
        })
    })
}
