
// Appointment Form Validation

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".header__form form");
    const bookBtn = document.querySelector(".form__btn");

    // Add date & time validation
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.required = true;
    dateInput.min = new Date().toISOString().split("T")[0]; 
    form.insertBefore(dateInput, bookBtn);

    const timeInput = document.createElement("input");
    timeInput.type = "time";
    timeInput.required = true;
    form.insertBefore(timeInput, bookBtn);

    bookBtn.addEventListener("click", function (e) {
        e.preventDefault();
        let inputs = form.querySelectorAll("input");
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                valid = false;
            } else {
                input.style.border = "none";
            }
        });

        if (valid) {
            alert("✅ Appointment booked successfully!");
            form.reset();
        }
    });


// Smooth Scroll for Navigation

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

// Doctor Profile Modal Popup

    const modal = document.createElement("div");
    modal.style.cssText = `
        position: fixed;
        top:0; left:0; width:100%; height:100%;
        background: rgba(0,0,0,0.7);
        display:none; align-items:center; justify-content:center;
        z-index:1000;
    `;
    const modalContent = document.createElement("div");
    modalContent.style.cssText = `
        background:#fff; padding:20px; border-radius:10px;
        max-width:400px; text-align:center;
    `;
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.addEventListener("click", e => {
        if (e.target === modal) modal.style.display = "none";
    });

    document.querySelectorAll(".doctors__card").forEach(card => {
        card.addEventListener("click", () => {
            const name = card.querySelector("h4").textContent;
            const specialty = card.querySelector("p").textContent;
            modalContent.innerHTML = `
                <h2>${name}</h2>
                <p>${specialty}</p>
                <p>Available: Mon-Fri, 9AM - 5PM</p>
                <button class="btn" id="modalBookBtn">Book Appointment</button>
            `;
            modal.style.display = "flex";

            document.getElementById("modalBookBtn").addEventListener("click", () => {
                modal.style.display = "none";
                document.querySelector(".header__form").scrollIntoView({ behavior: "smooth" });
            });
        });
    });

// Scroll Reveal Animations

    const revealElements = document.querySelectorAll(".section__container, .service__card, .doctors__card");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
            }
        });
    };

    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(50px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
});
