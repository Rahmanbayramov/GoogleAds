<?php
$to = "timurrozmetow17@gmail.com";
$from = $_POST['email'];
$message = 
"Salam" . $_POST['message'];
$headers = "From:" . $from;
if(mail($to,$message,$headers)) {
echo "Сообщение отправлено!";
} else {
echo "Ошибка при отправке сообщения.";
}
?>