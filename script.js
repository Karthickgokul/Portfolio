document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    const fadeElements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        fadeElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.75) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {
            formMessage.style.color = "red";
            formMessage.textContent = "All fields are required!";
        } else {
            formMessage.style.color = "green";
            formMessage.textContent = "Message sent successfully!";
            this.reset();
        }
    });
});
