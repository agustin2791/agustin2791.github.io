<?php
require_once 'phpmailer/PHPMailerAutoload.php';
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) && isset($_POST['phone'])) {
  //check if any of the inputs are empty
  if (empty($_POST['name']) || empty($_POST['email']) || empty($_POST['message']) || isset($_POST['phone'])) {
    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
    echo json_encode($data);
    exit;
  }
  // Create an instance of PHPMailer
  $mail = new PHPMailer();
  $mail -> From = $_POST['email'];
  $mail -> Phone = $_POST['phone'];
  $mail -> FromName = $_POST['name'];
  $mail -> Boat = $_POST['boat'];
  $mail -> Message = $_POST['message'];
  $mail -> To = $_POST['jesus@imd-sd.com'];
  $mail -> Subject = 'Quick Quote';
  $mail -> Body = "Name: ".$_POST['name']."\nPhone: ".$_POST['phone']."\nEmail: ".$_POST['email']."\nBoat Type: ".$_POST['boat']."\nAdditional Information: ".$_POST['message'];

  if (isset($_POST['ref'])) {
    $mail -> Body .="\r\n\r\nRef: ".$_POST['ref'];
  }
  if(!mail->send()){
    $data = array('success' => false, 'message' => 'Could not be sent. Message error: '.$mail->ErrorInfo);
    echo json_encode($data);
    exit;
  }
  $data = array('success' => true, 'message'=>'Thanks! We have received your message');
  echo json_encode($data);
} else {
  $data = array('success' => false, 'message'=>'Please fill out the form.');
  echo json_encode($data);
}



 ?>
