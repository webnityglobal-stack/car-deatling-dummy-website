
// BEFORE / AFTER SLIDER

const slider = document.getElementById("comparisonSlider");
const beforeImage = document.getElementById("beforeImage");
const comparisonLine = document.getElementById("comparisonLine");

slider.addEventListener("input", function () {

    const value = this.value;

    beforeImage.style.width = value + "%";
    comparisonLine.style.left = value + "%";

});


// GALLERY CATEGORY FILTER

const filterButtons = document.querySelectorAll(".gallery-filter");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.filter;

        portfolioItems.forEach(item => {

            if (
                category === "all" ||
                item.dataset.category === category
            ) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }

        });

    });

});


// MOBILE NAVBAR

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
