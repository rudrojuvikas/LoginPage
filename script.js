// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === "admin" && password === "password123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});

// Add some additional visual feedback
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 10px rgba(255, 111, 97, 0.5)';
    });

    input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
    });
});
