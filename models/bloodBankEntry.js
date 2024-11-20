let nextId = 4; // A counter to generate unique incremental IDs

class BloodBankEntry {
    constructor(donorName, age, bloodType, contactInfo, quantity, collectionDate, expirationDate, status) {
        this.id = nextId++; // Assign the current value of nextId and increment it for the next entry
        this.donorName = donorName;
        this.age = age;
        this.bloodType = bloodType;
        this.contactInfo = contactInfo;
        this.quantity = quantity;
        this.collectionDate = collectionDate;
        this.expirationDate = expirationDate;
        this.status = status;
    }
}

module.exports = BloodBankEntry;
