<?php
session_start();

$servername = "sql212.infinityfree.com";
$username = "if0_37214181";
$password = "cryptoripo54321";
$dbname = "if0_37214181_Yomo";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $rePassword = $_POST['enter-password'];

    if ($password === $rePassword) {
        $checkEmailSql = "SELECT * FROM users WHERE email='$email'";
        $result = mysqli_query($conn, $checkEmailSql);

        if (mysqli_num_rows($result) > 0) {
            $_SESSION['error'] = "Email already registered. Please use another email.";
            header("Location: /");
            exit();
        } else {
            $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
            
            if (mysqli_query($conn, $sql)) {
                $_SESSION['user_id'] = mysqli_insert_id($conn);
                header("Location: /Sign-in/index.html");
                exit();
            } else {
                $_SESSION['error'] = "Error: " . $sql . "<br>" . mysqli_error($conn);
                header("Location: /");
                exit();
            }
        }
    } else {
        $_SESSION['error'] = "Passwords do not match.";
        header("Location: /");
        exit();
    }
}

mysqli_close($conn);
?>
