const express = require("express");
const { db } = require("../firebase");

const router = express.Router();

// Upload Document Metadata
router.post("/upload", async (req, res) => {
  const { userId, fileName } = req.body;
  try {
    await db.collection("documents").add({ userId, fileName, uploadedAt: new Date() });
    res.status(201).json({ message: "Document uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error uploading document" });
  }
});

// Fetch User Documents
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const snapshot = await db.collection("documents").where("userId", "==", userId).get();
    const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({ error: "Error fetching documents" });
  }
});

module.exports = router;
