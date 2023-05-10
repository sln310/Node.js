const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // Get notes from database here
  res.render("readNotes", { notes });
});

module.exports = router;
