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
	$mail = new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'hr.proficentr@gmail.com';
	$mail->Password = 'qlppgnkreykltpmg';
	$mail->SMTPSecure = 'ssl';
	$mail->Port = 465;
	// $mail->SMTPDebug  = 2; 
	$mail->Subject = "Resume apply";
	$mail->setFrom("hr.proficentr@gmail.com");
	$mail->isHTML(true);
	$mail->AddAttachment($_FILES['attachFile']['tmp_name'], $_FILES['attachFile']['name']);
	$mail->Body = "Name: $name<br> Surname: $surname<br> Email: $email<br> Phone: $phone<br>";
	$mail->WordWrap = 50; 
	$mail->addAddress("hr.proficentr@gmail.com");
	$mail->smtpClose();

	?>