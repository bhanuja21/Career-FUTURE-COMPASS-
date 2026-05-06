const express = require('express');
const router = express.Router();
const User = require('../models/userModel'); // Ensure this model exists

router.post('/save-user', async (req, res) => {
    try {
        const { name, email, profilePicture, category } = req.body;
        const user = new User({ name, email, profilePicture, category });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/get-user/:email', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;