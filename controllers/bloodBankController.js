const BloodBankEntry = require('../models/bloodBankEntry');

// In-memory data store
const bloodBankEntries = [
    {
        id: 1,
        donorName: "John Doe",
        age: 30,
        bloodType: "A+",
        contactInfo: "john.doe@example.com",
        quantity: 500,
        collectionDate: "2024-11-01",
        expirationDate: "2024-12-01",
        status: "Available"
    },
    {
        id: 2,
        donorName: "Jane Smith",
        age: 28,
        bloodType: "O-",
        contactInfo: "jane.smith@example.com",
        quantity: 450,
        collectionDate: "2024-10-20",
        expirationDate: "2024-11-20",
        status: "Expired"
    },
    {
        id: 3,
        donorName: "Alice Johnson",
        age: 35,
        bloodType: "B+",
        contactInfo: "alice.johnson@example.com",
        quantity: 600,
        collectionDate: "2024-11-10",
        expirationDate: "2024-12-10",
        status: "Available"
    }      
];

// Function to create a new entry
function createEntry(req, res) {
    try {
        const { donorName, age, bloodType, contactInfo, quantity, collectionDate, expirationDate, status } = req.body;

        const newEntry = new BloodBankEntry(donorName, age, bloodType, contactInfo, quantity, collectionDate, expirationDate, status);
        bloodBankEntries.push(newEntry);

        res.status(201).json(newEntry);

    } catch (error) {
        res.status(500).json({ message: 'Error creating a new entry', error: error.message });
    }
}

// Function to retrieve all entries with optional pagination
function getAllEntries(req, res) {
    try {
        const { page, size } = req.query;

        if (!page || !size) {
            return res.status(200).json(bloodBankEntries);
        }

        const startIndex = (page - 1) * size;
        const endIndex = startIndex + parseInt(size);

        const paginatedEntries = bloodBankEntries.slice(startIndex, endIndex);
        res.json({
            page: parseInt(page),
            size: parseInt(size),
            data: paginatedEntries
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching the entries', error: error.message });
    }
}

// Function to retrieve an entry by ID
function getEntryById(req, res) {
    try {
        const { id } = req.params;
        const entry = bloodBankEntries.find(entry => entry.id === parseInt(id));

        if (!entry) {
            return res.status(404).json({ message: 'Entry not found.' });
        }

        res.json(entry);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching the entry by ID', error: error.message });
    }
}

// Function to update an existing entry by ID
function updateEntry(req, res) {
    try {
        const { id } = req.params;
        const { donorName, age, bloodType, contactInfo, quantity, collectionDate, expirationDate, status } = req.body;

        const entry = bloodBankEntries.find(entry => entry.id === parseInt(id));

        if (!entry) {
            return res.status(404).json({ message: 'Entry not found.' });
        }

        // Update fields
        if (donorName) entry.donorName = donorName;
        if (age) entry.age = age;
        if (bloodType) entry.bloodType = bloodType;
        if (contactInfo) entry.contactInfo = contactInfo;
        if (quantity) entry.quantity = quantity;
        if (collectionDate) entry.collectionDate = collectionDate;
        if (expirationDate) entry.expirationDate = expirationDate;
        if (status) entry.status = status;

        res.json(entry);
    } catch (error) {
        res.status(500).json({ message: 'Error updating the entry', error: error.message });
    }
}

// Function to delete an entry by ID
function deleteEntry(req, res) {
    try {
        const { id } = req.params;
        const index = bloodBankEntries.findIndex(entry => entry.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ message: 'Entry not found.' });
        }

        bloodBankEntries.splice(index, 1);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting the entry', error: error.message });
    }
}

// Function for search
function searchEntries(req, res) {
    try {
        const { bloodType, status, donorName } = req.query;

        let results = bloodBankEntries;

        if (bloodType) {
            results = results.filter(entry => entry.bloodType === bloodType);
        }

        if (status) {
            results = results.filter(entry => entry.status.toLowerCase() === status.toLowerCase());
        }

        if (donorName) {
            results = results.filter(entry => entry.donorName.toLowerCase().includes(donorName.toLowerCase()));
        }

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error generating the search response', error: error.message });
    }
}

// Export all functions
module.exports = {
    createEntry,
    getAllEntries,
    getEntryById,
    updateEntry,
    deleteEntry,
    searchEntries
};
