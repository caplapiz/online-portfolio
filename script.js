const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        statusMsg.textContent = "Please fill out all fields.";
        statusMsg.style.color = "#ff4f4f";
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        statusMsg.textContent = "Invalid email address.";
        statusMsg.style.color = "#ff4f4f";
        return;
    }

    statusMsg.textContent = "Message sent successfully!";
    statusMsg.style.color = "#00E5FF";

    form.reset();
});