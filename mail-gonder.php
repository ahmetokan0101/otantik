<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $adsoyad = htmlspecialchars($_POST["adsoyad"] ?? '');
    $email = htmlspecialchars($_POST["email"] ?? '');
    $konu = htmlspecialchars($_POST["konu"] ?? '');
    $mesaj = htmlspecialchars($_POST["mesaj"] ?? '');

    $mail = new PHPMailer(true);

    try {
        //Server ayarları
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'ankaraotantikmail@gmail.com'; // Gönderen Gmail
        $mail->Password   = 'fgvtyrtnjmhrolek'; // Gmail uygulama şifresi
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;
        $mail->CharSet    = 'UTF-8';
        $mail->isHTML(true);

        //Alıcı ve içerik
        $mail->setFrom($email, $adsoyad);
        $mail->addAddress('hazarayazkr@gmail.com'); // Sana gelecek adres

        $mail->Subject = "Otantik İletişim Formu: $konu";
        $mail->Body    = '
          <div style="font-family:Poppins,Arial,sans-serif;max-width:500px;margin:auto;border-radius:16px;border:1px solid #eee;box-shadow:0 2px 16px #FF6B6B22;padding:24px;background:#fff;">
            <div style="text-align:center;margin-bottom:18px;">
              <div style="display:inline-block;padding:10px 32px;border-radius:12px;background:linear-gradient(90deg,#FF6B6B,#4ECDC4);color:#fff;font-size:1.3em;font-weight:700;letter-spacing:1px;box-shadow:0 2px 8px #FF6B6B22;">Yeni İletişim Mesajı</div>
            </div>
            <div style="background:#F8F9FA;border-radius:12px;padding:16px 20px;margin-bottom:12px;">
              <strong>Ad Soyad:</strong> '.htmlspecialchars($adsoyad).'<br>
              <strong>E-posta:</strong> '.htmlspecialchars($email).'<br>
              <strong>Konu:</strong> '.htmlspecialchars($konu).'<br>
              <strong>Mesaj:</strong><br>
              <div style="margin-top:8px;color:#2D3436;">'.nl2br(htmlspecialchars($mesaj)).'</div>
            </div>
            <div style="text-align:center;color:#aaa;font-size:13px;margin-top:18px;">
              Ankara Otantik | <a href="https://ankaraotantik.com" style="color:#4ECDC4;text-decoration:none;">ankaraotantik.com</a>
            </div>
          </div>
        ';

        $mail->send();
        echo '<script>alert("Mesajınız başarıyla gönderildi!"); window.location.href="contact.html";</script>';
    } catch (Exception $e) {
        echo '<script>alert("Mesaj gönderilemedi. Hata: '.$mail->ErrorInfo.'"); window.location.href="contact.html";</script>';
    }
} else {
    header("Location: contact.html");
    exit;
} 