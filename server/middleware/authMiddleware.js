const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    // console.log("Headers received:", req.headers);
     // Debugging: Log headers
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("Decoded token:", decoded); 
        // Debugging: Log decoded token

        // Set req.user
        req.user = decoded;
        // console.log("User set in req.user:", req.user); 
        // Debugging: Log req.user

        next();
    } catch (error) {
        // console.error("Token verification error:", error);
        //  // Debugging: Log the error
        res.status(401).json({ message: "Token is not valid" });
    }
};

module.exports = authMiddleware;