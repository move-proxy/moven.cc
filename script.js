// Modal functionality
const modal = document.getElementById("loginModal");
const span = document.getElementsByClassName("close")[0];
const mainContent = document.getElementById("mainContent"); // Reference to main content

// Close modal when the user clicks on <span> (x)
span.onclick = function() {
    closeModal();
};

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};


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
        closeModal(); // Hide modal
        mainContent.style.display = 'block'; // Show the main content
    } else {
        alert('Invalid username or password!');
    }
});

// Function to open the modal and hide main content
function openModal() {
    modal.style.display = "block"; // Show modal
    mainContent.style.display = "none"; // Hide main content
}

// Function to close the modal and show main content
function closeModal() {
    modal.style.display = "none"; // Hide modal
    mainContent.style.display = "block"; // Show main content
}

// Show the login modal on page load
window.onload = function() {
    openModal(); // Show modal when the page loads
};
