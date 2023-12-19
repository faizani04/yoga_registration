# yoga_registration
Structure of the Directory
yoga-admission-system/
|-- public/
|   |-- styles.css         # CSS styles for HTML pages
|   |-- images/            # Directory for images
|       |-- yoga.jpg       # Sample image
|       |-- payment.jpg    # Sample payment image
|-- index.html             # Main admission form
|-- payment.html           # Payment page
|-- app.js                 # Node.js server handling enrollment and payment
|-- package.json           # Node.js package configuration
|-- README.md              # ReadMe file
|-- LICENSE                # License file (e.g., MIT License)

Introduction
This project is a simple Yoga Class Admission System that allows users to fill out an admission form and proceed to payment. The system is implemented using HTML for the user interface, JavaScript for client-side scripting, and a Node.js server with Express for handling enrollment and payment processes.

Features
Admission Form:

Collects user information such as name, age, and preferred batch.
Performs basic validation on user inputs.
Payment Page:

Collects payment details including card number, expiration date, and CVV.
Validates payment details using regular expressions.
Enrollment Endpoint:

Receives enrollment data from the admission form.
Simulates a payment process and generates a random transaction ID.
How to Run
Clone the Repository:

bash
Copy code
git clone <repository-url>
cd yoga-admission-system
Install Dependencies:

bash
Copy code
npm install
Run the Server:

bash
Copy code
npm start
Access the Application:

Open a web browser and go to http://localhost:8080 to access the Yoga Class Admission Form.
Application Structure
index.html: The main admission form.
payment.html: The payment page.
app.js: The Node.js server handling enrollment and payment processes.
public: Directory containing static files (CSS, images).
Notes
Sensitive Information:
Be cautious about logging sensitive information in the console.
Personally identifiable information (PII) should not be logged for security and privacy reasons.
Troubleshooting
If encountering issues, ensure that Node.js is installed, and dependencies are installed via npm install.
Author
Shaik Sumbul Faizani
