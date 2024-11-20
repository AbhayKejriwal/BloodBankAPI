const express = require("express");
const bloodBankRoutes = require("./routes/bloodBankRoutes");

const app = express();

//middleware for parsing the json
app.use(express.json());

// use the define routes
app.use("/", bloodBankRoutes);

// default route for unrecognized paths
app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
});

// start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
