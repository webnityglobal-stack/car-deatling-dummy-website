
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


// WHATSAPP CONTACT FORM

const contactForm = document.getElementById("contactForm");

// Replace with your actual WhatsApp number.
// Include country code, without + or spaces.
const whatsappNumber = "91XXXXXXXXXX";

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const car = document.getElementById("carModel").value.trim();
    const service = document.getElementById("serviceType").value;
    const message = document.getElementById("customerMessage").value.trim();

    const whatsappMessage = `
Hello APEX Detailing!

I want to enquire about your services.

Name: ${name}
Phone: ${phone}
Email: ${email}
Car Model: ${car}
Service: ${service}

Message: ${message}

Please contact me regarding this enquiry.
    `;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});
