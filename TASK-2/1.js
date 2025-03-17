document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("pass").value.trim();

        // Email validation pattern
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validation checks
        if (name === "") {
            alert("Please enter your name.");
            return;
        }
        if (email === "" || !emailPattern.test(email)) {
            alert("Please enter a valid email.\nPlease include '@' in the email address.");
            return;
        }
        if (password === "") {
            alert("Please enter your password.");
            return;
        }

        // If validation passes
        alert("Login successful!✅");
        form.submit(); // Submit form if everything is correct
    });
});
