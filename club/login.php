<?php
// Replace with your actual database credentials
$host = 'localhost';
$user = 'root';
$password = 'sulaksha';
$database = 'clubs';

$username = $_POST['username'];
$password = $_POST['password'];

// Connect to MySQL database
$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Query to check if username and password match in the database (replace with your actual table name)
$query = "SELECT * FROM users WHERE Username = '$username' AND Password = '$password'";
$result = $conn->query($query);

// Check if the query was successful
if ($result) {
    // Check if there is a matching record
    if ($result->num_rows > 0) {
        $response = ['success' => true];
    } else {
        $response = ['success' => false];
    }
} else {
    $response = ['success' => false];
}

// Send the JSON response
header('Content-Type: application/json');
echo json_encode($response);

// Close the database connection
$conn->close();
?>
