
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Thank you! Your appointment request has been received.");

    this.reset();
});
