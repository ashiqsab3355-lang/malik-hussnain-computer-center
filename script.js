const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "Name: " + name +
        "\nEmail: " + email +
        "\nSubject: " + subject +
        "\nMessage: " + message;

    const whatsappURL =
        "https://wa.me/923047093511?text=" +
        encodeURIComponent(whatsappMessage);

    formMessage.textContent =
        "Thank you " + name + "! WhatsApp is opening...";

    formMessage.style.color = "green";

    window.open(whatsappURL, "_blank");

    contactForm.reset();
});