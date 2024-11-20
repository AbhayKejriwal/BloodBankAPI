# Blood Bank Management REST API

This project is a RESTful API for managing a blood bank system, built using Node.js and Express. It supports CRUD operations, pagination, and search functionalities, with data stored in an in-memory array.

## API Endpoints

### **CRUD Operations**
- **Create:** `POST /api/bloodbank`
- **Read All:** `GET /api/bloodbank`
- **Read by ID:** `GET /api/bloodbank/:id`
- **Update:** `PUT /api/bloodbank/:id`
- **Delete:** `DELETE /api/bloodbank/:id`

### **Pagination**
- `GET /api/bloodbank?page={pageNumber}&size={pageSize}`

### **Search**
- **By Blood Type:** `GET /api/bloodbank/search?bloodType={bloodType}`
- **By Status:** `GET /api/bloodbank/search?status={status}`
- **By Donor Name:** `GET /api/bloodbank/search?donorName={donorName}`

## Models
Each blood bank entry has the following fields:
- id: A unique identifier for the entry (auto-generated).
- donorName: Name of the donor.
- age: Donor's age.
- bloodType: Blood group of the donor (e.g., A+, O-, B+).
- contactInfo: Contact details (phone number or email).
- quantity: Quantity of blood donated (in ml).
- collectionDate: Date when the blood was collected.
- expirationDate: Expiration date for the blood unit.
- status: Status of the blood entry (e.g., "Available", "Requested", "Expired")

## Test Results

The test results screenshots are available in the 'Postman Test Results' folder.