<?php
	require 'includes/PHPMailer.php';
	require 'includes/SMTP.php';
	require 'includes/Exception.php';
	$name = $_POST['uname'];
	$surname = $_POST['usurname'];
	$email= $_POST['uemail'];
	$phone= $_POST['uphone'];
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	$mail = new PHPMailer();
	$mail->SMTPDebug  = 2; 
	$mail->Host = "localhost";
	$mail->SMTPAuth = false;
	$mail->Port = 25;
	$mail->Subject = "Resume apply";
	$mail->setFrom("maxtimoshin94@gmail.com");
	$mail->isHTML(true);
	// $mail->AddAttachment($_FILES['attachFile']['tmp_name'], $_FILES['attachFile']['name']);
	$mail->Body = "Name: $name<br> Surname: $surname<br> Email: $email<br> Phone: $phone<br>";
	$mail->WordWrap = 50; 
	$mail->addAddress("maxtimoshin94@gmail.com");
	if ( $mail->send() ) {
		echo "Email Sent..!";
	}else{
		echo "Message could not be sent. Mailer Error:";
	}
	$mail->smtpClose();