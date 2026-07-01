// Live Search
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();

            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}); function orderProduct(name, price) {
    const phone = "2348128748746";

    const message = `Hello RAXY SOCIAL.

I want to buy ${name} - ${price}.`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
} // Browse Products Dropdown
function goToCategory() {
    const select = document.getElementById("categorySelect");
    const category = select.value;

    if (category) {
        document.getElementById(category).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    select.selectedIndex = 0;
}
// Dark / Light Mode
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
