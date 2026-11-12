
// Get the contact form
let form = document.getElementById("contactForm");

// Add submit event
form.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get entered values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check the form details
    if (name === "" || email === "" || message === "") {
        document.getElementById("result").innerHTML =
            "Please fill all the fields.";
    }
    else {
        document.getElementById("result").innerHTML =
            "Thank you, " + name + "! Your message has been received.";

        // Clear the form
        form.reset();
    }

});
