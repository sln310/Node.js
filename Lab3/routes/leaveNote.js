const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("leaveNote");
});

router.post("/", (req, res) => {
  // Process form data here
  res.redirect("/read-notes");
});

module.exports = router;
