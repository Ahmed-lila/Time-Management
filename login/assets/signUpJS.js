// formHandler.js

// Declare variables to store username and password
let username = '';
let password = '';

// Function to handle form submission
export async function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission

    username = document.getElementById('newUsername').value;
    password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageElement = document.getElementById('signupMessage');

    // Check if passwords match
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match.';
        messageElement.style.color = 'red';
        return;
    }

    // Example check for username and password length
    if (username.trim() === '' || password.length < 6) {
        messageElement.textContent = 'Username cannot be empty and password must be at least 6 characters.';
        messageElement.style.color = 'red';
        return;
    }

    // Additional logic to handle valid submission can be added here
}

// Export the variables
export { username, password };
