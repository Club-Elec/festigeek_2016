<?php
    $to      = 'thomas.coussot@isen-bretagne.fr';
    $subject = 'Demande d\'information sur festigeek';
    $message = $_POST['contact-content']."\r\n".
               "\r\n".
               $_POST['contact-firstname']." ".$_POST["contact-lastname"]."\r\n".
               $_POST['contact-email'];
    $headers = 'From: '.$_POST['contact-email']."\r\n" .
               'X-Mailer: PHP/' . phpversion();

    echo json_encode(["mail" => mail( $to, $subject, $message, $headers )]);
?>
