const modal = document.getElementById("loginModal");
const span = document.getElementsByClassName("close")[0];
const mainContent = document.getElementById("mainContent"); 


span.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


const validUsername = atob('bW92ZQ=='); 
const validPassword = atob('aWxvdmV3ZWVkQDEyMw=='); 


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   

  
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        modal.style.display = 'none'; 
        mainContent.style.display = 'block'; 
    } else {
        alert('Invalid username or password!');
    }
});

window.onload = function() {
    modal.style.display = "block"; 
};
