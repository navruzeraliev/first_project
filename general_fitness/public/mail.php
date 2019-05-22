<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$mail->isSMTP();
$mail->Host = 'smtp.mail.ru';
$mail->SMTPAuth = true;
$mail->Username = 'navruzeraliev@mail.ru';
$mail->Password = '12345678a';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('navruzeraliev@mail.ru');
$mail->addAddress('promolines@list.ru');
$mail->isHTML(true);
$mail->Subject = 'Заявка с сайта PromoLine';
$mail->Body    = ''.$name .' оставил заявку, <br> его телефон: '.$phone;
$mail->AltBody = '';
if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>