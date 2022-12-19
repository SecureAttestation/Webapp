<?php 
    $errors = [];
    $errorMessage = '';

    if (!empty($_POST)) {
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        if (empty($firstname)) {
            $errors[] = 'firstname is empty';
        }

        if (empty($lastname)) {
            $errors[] = 'lastname is empty';
        }

        if (empty($email)) {
            $errors[] = 'Email is empty';
        } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = 'Email is invalid';
        }

        if (empty($message)) {
            $errors[] = 'Message is empty';
        }

        if (empty($errors)) {
            $toEmail = 'info@secureattestation.com';
            $emailSubject = 'SecureAttestation has new enquiry';
            $headers = ['From' => $email, 'Reply-To' => $email, 'Content-type' => 'text/html; charset=utf-8'];
            $bodyParagraphs = ["Name: {$firstname $lastname}", "Email: {$email}", "Message:", $message];
            $body = join(PHP_EOL, $bodyParagraphs);

            if (mail($toEmail, $emailSubject, $body, $headers)) 
                
            } else {
                $errorMessage = 'Oops, something went wrong. Please try again later';
            }

   } else {

       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
   }

?>