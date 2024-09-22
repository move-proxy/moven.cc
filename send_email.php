<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    // Email details
    $to = "buffen.willi@gmail.com";  
    $subject = "New Message from Contact Form";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
    
    // Email message body
    $email_message = "You have received a new message from the contact form on your website.\n\n";
    $email_message .= "Name: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message\n";

    // Send email
    if (mail($to, $subject, $email_message, $headers)) {
        // Success message
        echo "Thank you, your message has been sent successfully!";
    } else {
        // Failure message
        echo "Sorry, there was an issue sending your message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}

if (mail($to, $subject, $email_message, $headers)) {
    header("Location: thank_you.html"); 
    exit();
} else {
    echo "Sorry, there was an issue sending your message. Please try again later.";
}

?> 
