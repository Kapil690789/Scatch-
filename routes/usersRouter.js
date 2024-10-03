const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController"); // Corrected path

router.get("/", function(req, res) {
    res.send("hey it's working");
});

router.post("/register", (req, res) => {
    // Implement registration logic or call registerUser function
    res.send("hey it's working");
});

router.post("/login", loginUser);

module.exports = router;
