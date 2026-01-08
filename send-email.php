<?php
/*// send_email.php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Collect and sanitize input from the form
    $name = htmlspecialchars(strip_tags(trim($_POST["name"])));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(strip_tags(trim($_POST["message"])));

    // 2. Setup Email - TEST MODE
    $to = "ianmacharia290@gmail.com"; 
    $subject = "UMAKC TEST: Message from $name";
    
    // 3. Create the email content
    $email_body = "--- UMAKC WEBSITE CONTACT TEST ---\n\n";
    $email_body .= "Sender Name: $name\n";
    $email_body .= "Sender Email: $email\n\n";
    $email_body .= "Message Content:\n$message\n\n";
    $email_body .= "--- End of Message ---";

    // 4. Email headers
    $headers = "From: noreply@umakc.org\r\n"; 
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // 5. Send Logic
    if (mail($to, $subject, $email_body, $headers)) {
        // Success: Redirect back with a success message
        echo "<script>alert('Test successful! Check your email at ianmacharia290@gmail.com'); window.location.href='index.php';</script>";
    } else {
        // Failure: Show error
        echo "<script>alert('Test failed. The server could not send the email.'); window.location.href='index.php';</script>";
    }
} else {
    // If someone tries to access the file directly, send them back to home
    header("Location: index.php");
    exit;
}
?>*/