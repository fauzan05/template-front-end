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
//     var myModal = new bootstrap.Modal(document.getElementById('successResetPasswordModal'));
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
const selectedMainAddressButtons = document.getElementsByClassName("select-main-address")
if (editAddressButtons && editAddressModal || deleteAddressButtons || selectedMainAddressButtons) {
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

    Array.from(selectedMainAddressButtons).forEach(selectedMainAddressButton => {
        selectedMainAddressButton.addEventListener("click", () => {
            let showReviewModal = new bootstrap.Modal(document.getElementById("selectMainAddress"))
            showReviewModal.show()
        })
    })
}

// Input Password
// Mendapatkan elemen input password dan tombol show password
const passwordInputs = document.getElementsByClassName('password-input');
const showPasswordButtons = document.getElementsByClassName('show-password-button');
if (passwordInputs && showPasswordButtons) {
    Array.from(showPasswordButtons).forEach((showPasswordButton, index) => {
        showPasswordButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
        showPasswordButton.addEventListener("click", () => {
            if (passwordInputs[index].type === 'password') {
                passwordInputs[index].type = 'text';
                showPasswordButton.innerHTML = '<i class="fa-solid fa-eye"></i>'
            } else {
                passwordInputs[index].type = 'password';
                showPasswordButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
            }
        })
    })
}


const outResetPasswordButton = document.getElementById("outResetPassword")
const outResetPasswordModal = document.getElementById("outResetPasswordModal");
if (outResetPasswordButton && outResetPasswordModal) {
    outResetPasswordButton.addEventListener("click", () => {
        let showoutResetPasswordModal = bootstrap.Modal.getOrCreateInstance('#outResetPasswordModal')
        showoutResetPasswordModal.show()
    })
}

const sendVerificationCodeButton = document.getElementById("sendVerificationCode");
const countTimer = document.getElementById("countTimer");
const infoSendVerificationCode = document.getElementById("infoSendVerificationCode");
if (sendVerificationCodeButton) {
    sendVerificationCodeButton.addEventListener("click", () => {
        startCountdown()
    });

    function startCountdown() {
        let x; // Variabel untuk menyimpan ID interval
        let twoMinutesLater; // Variabel untuk menyimpan waktu dua menit setelah tombol pertama kali ditekan
        // Get today's date and time
        let now = new Date().getTime();

        // Set the date we're counting down to, hanya dihitung saat pertama kali tombol ditekan
        if (!twoMinutesLater) {
            twoMinutesLater = new Date(now + 1 * 10 * 1000);
        }

        // Update the countdown every 1 second
        x = setInterval(function () {
            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = twoMinutesLater - now;

            // Time calculations for minutes and seconds
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="countTimer"
            countTimer.innerHTML = minutes + " menit " + seconds + " detik ";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(x);
                countTimer.innerHTML = "";
                infoSendVerificationCode.innerHTML = 'Tidak menerima kode? <span id="sendVerificationCode" class="text-danger cursor-pointer">Kirim Ulang</span>';
                twoMinutesLater = new Date(now + 1 * 10 * 1000);; // Reset variabel twoMinutesLater agar bisa dihitung kembali saat tombol ditekan lagi
                // console.log(sendVerificationCodeButton.innerHTML)
                // console.log(twoMinutesLater)
                sendVerificationCodeButton.addEventListener("click", () => {
                    console.log("terpanggil")
                });
            } else {
                infoSendVerificationCode.innerHTML = "Tunggu hingga waktu selesai, baru kemudian kirim email lagi";
            }
        }, 1000);
    }

    // Panggil startCountdown saat halaman dimuat pertama kali
    // startCountdown();
}


let mapOrder = document.getElementById("mapOrder");
if (mapOrder) {
    let
        longitude,
        latitude,
        currentLonLat,
        centralLonLat,
        distance,
        showDistance,
        showOngkir;

    mapOrder = L.map('mapOrder', { zoomControl: false }).setView([-7.666180528826785, 109.64169625691922], 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapOrder);
    let marker = L.marker([-7.666180528826785, 109.64169625691922]).addTo(mapOrder)
    // lokasi tokonya
    centralLonLat = marker.getLatLng()
    L.control.locate({
        keepCurrentZoomLevel: true
    }).addTo(mapOrder);
    mapOrder.on('locationfound', onLocationFound);

    function onLocationFound(e) {
        const lon = e.latlng.lng;
        const lat = e.latlng.lat;
        longitude = document.getElementById("showLongitude");
        latitude = document.getElementById("showLatitude");
        longitude.innerHTML = lon
        latitude.innerHTML = lat
        currentLonLat = e.latlng;
        showDistance = document.getElementById("showDistance");
        distance = mapOrder.distance(currentLonLat, centralLonLat) / 1000;
        showDistance.innerHTML = distance.toFixed(1)
        // ongkir
        showOngkir = document.getElementById("showOngkir");
        showOngkir.innerHTML = 5000 * distance.toFixed(1)
    }

    const getLonLatButton = document.getElementById("getLonLat");
    getLonLatButton.addEventListener("click", () => {
        console.log("Longitude : ", longitude)
        console.log("Latitude : ", latitude)
    })
}

const deliveryLabel = document.getElementById("deliveryLabel")
const takeAwayLabel = document.getElementById("takeAwayLabel")
if (deliveryLabel && takeAwayLabel) {
    const showCurrentLocation = document.getElementById("showCurrentLocation")
    takeAwayLabel.addEventListener("click", () => {
        showCurrentLocation.classList.add("d-none")
    })
    deliveryLabel.addEventListener("click", () => {
       showCurrentLocation.classList.remove("d-none")
    })
}

const copyButtons = document.getElementsByClassName("fa-copy")
const discountCode = document.getElementsByClassName("discount-code")
const copyCodeSuccessInfos = document.getElementsByClassName("copy-code-success-info")
if (copyButtons && discountCode) {
    Array.from(copyButtons).forEach((copyButton, index) => {
        copyButton.addEventListener("click",() => {
            navigator.clipboard.writeText(discountCode[index].innerText)
            copyCodeSuccessInfos[index].classList.remove("d-none")
        })
    })
}
   



$(document).ready(function() {

    $('#btnToUp').hide();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#btnToUp').fadeIn('slow');
        } else {
            $('#btnToUp').fadeOut('slow');
        }
        });
        $('#btnToUp').click(function () {
            // console.log("DIKLIK")
            $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
            return false;
        });
    
});

