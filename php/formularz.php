<?php

$telefon = ($_GET['telefon']);
$email = ($_GET['email']);
$tytul =  ($_GET['tytul']);
$imie = ($_GET['imie']);
$wiadomosc = ($_GET['wiadomosc']);
$tresc = "Wiadomosc od : $imie <br> Adres e-mail : $email <br> Numer telefonu: $telefon <br> Tresc: $wiadomosc";

require './PHPMailerAutoload.php';
$mail = new PHPMailer;
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'szmeku@gmail.com';                 // SMTP username
$mail->Password = 'upliyxjvvzkullks';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to
$mail->setFrom('szmeku@gmail.com', 'Mailer');
$mail->addAddress('beraxxx@gmail.com', 'Chujoza');     // Add a recipient               // Name is optional
 // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = "$tytul";
$mail->Body    = "$tresc";
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'Message has been sent';
}




?>