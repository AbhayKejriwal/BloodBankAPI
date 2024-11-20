function validateBloodBankEntry(req, res, next) {
    const { donorName, age, bloodType, contactInfo, quantity, collectionDate, expirationDate, status } = req.body;

    // Validate donorName
    if (typeof donorName !== 'string' || donorName.trim() === '') {
        return res.status(400).json({ message: 'Invalid donorName. It must be a non-empty string.' });
    }

    // Validate age
    if (typeof age !== 'number' || age <= 0) {
        return res.status(400).json({ message: 'Invalid age. It must be a positive number.' });
    }

    // Validate bloodType
    if (typeof bloodType !== 'string' || !/^(A|B|AB|O)[+-]$/.test(bloodType)) {
        return res.status(400).json({ message: 'Invalid bloodType. Format must be A+, O-, etc.' });
    }

    // Validate contactInfo
    if (typeof contactInfo !== 'string' || contactInfo.trim() === '') {
        return res.status(400).json({ message: 'Invalid contactInfo. It must be a non-empty string.' });
    }

    // Validate quantity
    if (typeof quantity !== 'number' || quantity <= 0) {
        return res.status(400).json({ message: 'Invalid quantity. It must be a positive number.' });
    }

    // Validate collectionDate
    if (isNaN(Date.parse(collectionDate))) {
        return res.status(400).json({ message: 'Invalid collectionDate. It must be a valid date string.' });
    }

    // Validate expirationDate
    if (isNaN(Date.parse(expirationDate))) {
        return res.status(400).json({ message: 'Invalid expirationDate. It must be a valid date string.' });
    }

    // Validate status
    if (typeof status !== 'string' || !['Available', 'Requested', 'Expired'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status. Allowed values are Available, Requested, or Expired.' });
    }

    // If all validations pass, proceed to the controller function
    next();
}

module.exports = { validateBloodBankEntry } ;