/* ==========================================
   RAXY SOCIAL - Main JavaScript
========================================== */

/* ==========================
   Live Search
========================== */

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value) ? "block" : "none";

        });

    });

}


/* ==========================
   Smooth Scroll
========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    });

});


/* ==========================
   WhatsApp Order
========================== */

function orderProduct(name, price) {

    const phone = "2348128748746";

    const message =
`Hello RAXY SOCIAL.

I want to buy:

Product: ${name}

Price: ${price}`;

    const url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


/* ==========================
   Browse Categories
========================== */

function goToCategory() {

    const select = document.getElementById("categorySelect");

    if (!select) return;

    const category = select.value;

    if (category) {

        const section = document.getElementById(category);

        if (section) {

            section.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    }

    select.selectedIndex = 0;

}


/* ==========================
   Dark / Light Mode
========================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeToggle.innerHTML = "🌞 Light Mode";

        } else {

            themeToggle.innerHTML = "🌙 Dark Mode";

        }

    });

}


/* ==========================
   Welcome Popup
========================== */

window.addEventListener("load", function () {

    const popup = document.getElementById("welcomePopup");
    const closeBtn = document.getElementById("closePopup");

    if (!popup || !closeBtn) return;

    popup.style.display = "flex";

    closeBtn.addEventListener("click", function () {

        popup.style.display = "none";

    });

    popup.addEventListener("click", function (e) {

        if (e.target === popup) {

            popup.style.display = "none";

        }

    });

});


/* ==========================
   Login (Demo)
========================== */

function loginUser() {

    alert("Login successful! (Demo)");

    window.location.href = "index.html";

    return false;

}


/* ==========================
   Register Validation
========================== */

function validateForm() {

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    if (!username || !email || !phone || !password || !confirmPassword) {
        return true;
    }

    if (username.value.trim() === "") {

        alert("Enter your username.");

        return false;

    }

    if (email.value.trim() === "") {

        alert("Enter your email.");

        return false;

    }

    if (phone.value.trim() === "") {

        alert("Enter your phone number.");

        return false;

    }

    if (password.value.length < 6) {

        alert("Password must be at least 6 characters.");

        return false;

    }

    if (password.value !== confirmPassword.value) {

        alert("Passwords do not match.");

        return false;

    }

    if (terms && !terms.checked) {

        alert("Please accept the Terms & Conditions.");

        return false;

    }

    alert("Registration successful! (Demo)");

    return false;

}


/* ==========================
   Password Strength
========================== */

function checkPasswordStrength() {

    const password = document.getElementById("registerPassword");
    const strength = document.getElementById("passwordStrength");

    if (!password || !strength) return;

    const value = password.value;

    if (value.length === 0) {

        strength.innerHTML = "";

    }

    else if (value.length < 6) {

        strength.innerHTML = "🔴 Weak Password";
        strength.style.color = "#ff4d4d";

    }

    else if (value.length < 10) {

        strength.innerHTML = "🟡 Medium Password";
        strength.style.color = "#ffb300";

    }

    else {

        strength.innerHTML = "🟢 Strong Password";
        strength.style.color = "#25D366";

    }

}


/* ==========================
   Password Visibility
========================== */

function toggleRegisterPassword() {

    const input = document.getElementById("registerPassword");

    if (!input) return;

    input.type = input.type === "password" ? "text" : "password";

}

function toggleConfirmPassword() {

    const input = document.getElementById("confirmPassword");

    if (!input) return;

    input.type = input.type === "password" ? "text" : "password";

}
