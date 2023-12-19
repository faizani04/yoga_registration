// app.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Mock in-memory database
const database = [];

// Mock payment function
function completePayment() {
    // Generate a random transaction ID for each payment
    const transactionId = Math.floor(Math.random() * 1000000000).toString();
    
    // Simulate a successful payment (adjust as needed)
    return { status: 'success', transactionId: transactionId };
}

// Route to handle yoga class enrollment
app.post('/enroll', (req, res) => {
    const data = req.body;

    // Store data in the database
    database.push(data);

    // Mock payment function
    const paymentResponse = completePayment();

    // Return the payment status along with the enrollment response
    res.json({ message: 'Enrollment successful!', payment_response: paymentResponse });
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
