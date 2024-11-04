// document.querySelector(".submitBtn").addEventListener("click", function(event) {
//     let password = document.querySelector("#password").value;
//     let confirmPassword = document.querySelector("#cpassword").value;

//     if(password !== confirmPassword) {
//         event.preventDefault(); // This prevents the form from submitting
//         alert("Passwords don't match");
//     }


// });

document.querySelector(".submitBtn").addEventListener("click", function(event) {
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#cpassword").value;
    let passwordInputs = document.querySelectorAll(".passwordInput");
    let errorDiv = document.querySelector("#passwordError");

    // Reset the styles and error message
    passwordInputs.forEach(input => {
        input.style.border = ""; // Reset border color
    });
    errorDiv.style.display = "none"; // Hide error message

    // Check if passwords match
    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        // Show error message
        errorDiv.style.display = "block";
        
        // Change border color to red for both password inputs
        passwordInputs.forEach(input => {
            input.style.border = "1px solid red"; // Set border color to red
        });
    }
});

