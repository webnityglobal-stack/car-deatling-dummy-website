
document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVBAR
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");

                const icon = menuBtn.querySelector("i");

                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }


    // BOOKING FORM
    const bookingForm = document.getElementById("appointmentForm");

    const dateInput = document.getElementById("date");

    // Set minimum booking date to today
    if (dateInput) {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        dateInput.min = `${year}-${month}-${day}`;
    }


    if (bookingForm) {

        bookingForm.addEventListener("submit", function (event) {

            event.preventDefault();

            // GET FORM VALUES
            const name = document.getElementById("fullName").value.trim();

            const phone = document.getElementById("phone").value.trim();

            const email = document.getElementById("email").value.trim();

            const carBrand = document.getElementById("carBrand").value;

            const carModel = document.getElementById("carModel").value.trim();

            const carYear = document.getElementById("carYear").value;

            const service = document.getElementById("service").value;

            const date = document.getElementById("date").value;

            const time = document.getElementById("time").value;

            const message = document.getElementById("message").value.trim();


            // PHONE VALIDATION
            if (!/^[0-9]{10}$/.test(phone)) {
                alert("Please enter a valid 10-digit mobile number.");
                return;
            }


            // DATE VALIDATION
            const selectedDate = new Date(date + "T00:00:00");
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            if (!date || selectedDate < today) {
                alert("Please select a valid appointment date.");
                return;
            }


            // WHATSAPP NUMBER
            // Replace with your actual business WhatsApp number.
            // Example: 919876543210
            const whatsappNumber = "91XXXXXXXXXX";


            // CREATE WHATSAPP MESSAGE
            const whatsappMessage = `
*NEW APPOINTMENT REQUEST*
*APEX DETAILING*

*PERSONAL INFORMATION*
Name: ${name}
Phone: ${phone}
Email: ${email || "Not Provided"}

*VEHICLE INFORMATION*
Car Brand: ${carBrand}
Car Model: ${carModel}
Manufacturing Year: ${carYear || "Not Provided"}

*SERVICE DETAILS*
Service: ${service}
Appointment Date: ${date}
Preferred Time: ${time}

*Additional Requirements:*
${message || "None"}

Please contact me regarding this appointment.
            `;


            // OPEN WHATSAPP
            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);


            if (whatsappNumber === "91XXXXXXXXXX") {
                alert("Please add your actual WhatsApp business number in booking.js.");
                return;
            }

            window.open(whatsappURL, "_blank");

        });

    }

});
