<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$host = 'sql212.infinityfree.com';
$dbname = 'if0_37214181_Yomo';
$username = 'if0_37214181';
$password = 'cryptoripo54321';

$conn = mysqli_connect($host, $username, $password, $dbname);

if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

$cryptoType = isset($_POST['cryptoType']) ? $_POST['cryptoType'] : '';
$cryptoAmount = isset($_POST['cryptoAmount']) ? (float)$_POST['cryptoAmount'] : 0;
$userGmail = isset($_POST['userGmail']) ? $_POST['userGmail'] : '';

if (empty($cryptoType) || empty($userGmail) || $cryptoAmount <= 0) {
    echo 'Invalid input';
    mysqli_close($conn);
    exit;
}

if ($cryptoType == 'btc') {
    $sql = "UPDATE users SET btc = btc + $cryptoAmount WHERE gmail = '$userGmail'";
} elseif ($cryptoType == 'eth') {
    $sql = "UPDATE users SET eth = eth + $cryptoAmount WHERE gmail = '$userGmail'";
} elseif ($cryptoType == 'dia') {
    $sql = "UPDATE users SET dia = dia + $cryptoAmount WHERE gmail = '$userGmail'";
} elseif ($cryptoType == 'yom') {
    $sql = "UPDATE users SET yom = yom + $cryptoAmount WHERE gmail = '$userGmail'";
} else {
    echo 'Invalid cryptocurrency type';
    mysqli_close($conn);
    exit;
}

if (mysqli_query($conn, $sql)) {
    echo 'Success';
} else {
    echo 'Error: ' . mysqli_error($conn);
}

mysqli_close($conn);
?>