const modal = document.getElementById("loginModal");
const span = document.getElementsByClassName("close")[0];
const mainContent = document.getElementById("mainContent"); // Reference to main content

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

// Close modal when the user clicks on <span> (x)
span.onclick = closeModal;

// Close modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent form from reloading the page

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        const response = await fetch('/.netlify/functions/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.status === 200) {
            alert(result.message);
            closeModal(); // Hide modal
        } else {
            alert(result.message); // Display the error message
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});

// Show the login modal on page load
window.onload = function() {
    openModal(); // Show modal when the page loads
};
