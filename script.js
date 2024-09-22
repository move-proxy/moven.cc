// Modal functionality
const modal = document.getElementById("loginModal");
const span = document.getElementsByClassName("close")[0];
const mainContent = document.getElementById("mainContent"); // Reference to main content

// Close modal when the user clicks on <span> (x)
span.onclick = function() {
    modal.style.display = "none";
};

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Use Base64 to obfuscate valid credentials
const validUsername = atob('bW92ZQ=='); 
const validPassword = atob('aWxvdmV3ZWVkQDEyMw=='); 

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();


    
    // Check credentials (case-sensitive)
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        modal.style.display = 'none'; // Hide modal
        mainContent.style.display = 'block'; // Show the main content
    } else {
        alert('Invalid username or password!');
    }
});

// Show the login modal on page load
window.onload = function() {
    modal.style.display = "block"; // Show modal when the page loads
};
