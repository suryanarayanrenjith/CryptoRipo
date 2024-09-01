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


    $sql = "SELECT * FROM users WHERE email='$email'";
    $result = mysqli_query($conn, $sql);

    
    if (mysqli_num_rows($result) > 0) {
        $user = mysqli_fetch_assoc($result);

        
        if ($password == $user['password']) {
            
            $_SESSION['user_id'] = $user['id'];
            header("Location: /Dashboard");
            exit();
        } else {
            $_SESSION['error'] = "Invalid email or password.";
            header("Location: index.php");
            exit();
        }
    } else {
        $_SESSION['error'] = "Invalid email or password.";
        header("Location: /");
        exit();
    }
}

mysqli_close($conn);
?>
