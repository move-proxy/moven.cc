const modal = document.getElementById("loginModal");
const span = document.getElementsByClassName("close")[0];
const mainContent = document.getElementById("mainContent"); 

function openModal() {
    modal.style.display = "block"; 
    mainContent.style.display = "none"; 
}

function closeModal() {
    modal.style.display = "none"; 
    mainContent.style.display = "block"; 
}

span.onclick = closeModal;

window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
};

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault(); 

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
            closeModal(); 
        } else {
            alert(result.message); 
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});


window.onload = function() {
    openModal(); 
};
