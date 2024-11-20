const express = require('express');
const bloodBankController = require('../controllers/bloodBankController');
const validator = require('../middleware/validate'); // Assuming validation.js is in the middleware directory

const router = express.Router();

// Route for Search Functionality
router.get('/api/bloodbank/search', bloodBankController.searchEntries);

// Routes for CRUD Operations and Pagination
// Create operation
router.post('/api/bloodbank', validator.validateBloodBankEntry, bloodBankController.createEntry);

// Read operations
router.get('/api/bloodbank', bloodBankController.getAllEntries); //also includes pagination feature if query params are provided
router.get('/api/bloodbank/:id', bloodBankController.getEntryById);

// Update operation
router.put('/api/bloodbank/:id', bloodBankController.updateEntry);
router.delete('/api/bloodbank/:id', bloodBankController.deleteEntry);



module.exports = router;