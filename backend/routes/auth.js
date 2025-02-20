const express = require("express");
const { auth } = require("../firebase");

const router = express.Router();

// Verify Firebase Token
router.post("/verify-token", async (req, res) => {
  const { token } = req.body;
  try {
    const decodedToken = await auth.verifyIdToken(token);
    res.status(200).json({ uid: decodedToken.uid, email: decodedToken.email });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});

module.exports = router;
