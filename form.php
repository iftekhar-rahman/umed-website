<?php

$name = $_POST['inputName'];
$date = $_POST['inputDate'];
$residence = $_POST['inputResidence'];
$email = $_POST['inputEmail'];
$position = $_POST['inputPositioned'];
$other = $_POST['inputAnother'];

$email_from = 'iftekharmail2@yahoo.com';

$email_subject = 'New Form Submission';

$email_body =   'User Name: $name.\n'.
                'User Date: $date.\n'.
                'User Residence: $residence.\n'.
                'User Email: $email.\n'.
                'User Position: $position.\n'.
                'Other: $other.\n';


$to = 'iftekharmail1@yahoo.com';

$headers = 'From: $email_from \r\n';

$headers = 'Reply-To: $email \r\n';

mail($to, $email_subject, $email_body, $headers);

header('Location: contact-form.html');




?>
