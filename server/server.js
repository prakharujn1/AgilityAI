const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const authRoutes = require("./routes/authRoutes");
const jobListingRoutes = require("./routes/jobListingRoutes");
const jobApplicationRoutes = require("./routes/jobApplicationRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Enable CORS
app.use(
    cors({
        origin: "http://localhost:5173", // Allow requests from this origin
        credentials: true, // Allow cookies and credentials
    })
);

// Routes 
app.use("/api/auth", authRoutes);
app.use("/api/joblistings", jobListingRoutes);
app.use("/api/jobapplications", jobApplicationRoutes);
app.use("/api/enquiry", enquiryRoutes);

// MongoDB Connection
mongoose
    .connect(process.env.mongo_url)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error("MongoDB Connection Error:", err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));