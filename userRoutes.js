const express = require('express');
const { verifyGoogleToken } = require('../controllers/authController');

const router = express.Router();

// Authentication Route
router.post('/auth/google', verifyGoogleToken);

module.exports = router;