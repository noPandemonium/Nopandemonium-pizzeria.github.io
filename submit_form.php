<?php
// Step 1: Check if the form data is submitted via POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Step 2: Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Step 3: Validate the data (optional but recommended)
    if (empty($name) || empty($email) || empty($message)) {
        echo "All fields are required.";
        exit;
    }

    // Step 4: Set up email parameters
    $to = "youremail@example.com"; // Replace with your email address
    $subject = "New Contact Form Message";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Step 5: Compose the email body
    $email_body = "Name: $name\n";
    $email_body .= "Email: $email\n";
    $email_body .= "Message:\n\n$message";

    // Step 6: Send the email
    if (mail($to, $subject, $email_body, $headers)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "An error occurred while sending your message. Please try again later.";
    }
}
