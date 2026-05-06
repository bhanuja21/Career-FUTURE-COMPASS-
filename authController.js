const admin = require('firebase-admin');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(require(process.env.FIREBASE_CREDENTIALS))
});

// Verify Google Token
exports.verifyGoogleToken = async (req, res) => {
  const { token } = req.body;
  
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const { name, email, picture } = decodedToken;
    
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email, profilePicture: picture });
    }

    const jwtToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login Successful', token: jwtToken, user });
  } catch (error) {
    res.status(401).json({ error: 'Invalid Token' });
  }
};