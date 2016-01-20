<?php

$telefon = ($_GET['telefon']);
$email = ($_GET['email']);
$tytul =  ($_GET['tytul']);
$imie = ($_GET['imie']);
$wiadomosc = ($_GET['wiadomosc']);


$tresc = "Wiadomosc od : $imie <br> Adres e-mail : $email <br> Numer telefonu: $telefon <br> Tresc: $wiadomosc";

echo "$tytul";
echo "$tresc";


?>