const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('contact.ejs', { title: 'Contact Us' });
});

// Handle form submission (simplified example)
router.post('/submit', (req, res) => {
  // Process form data here
  // For simplicity, let's assume the form data is in req.body
  console.log(req.body);

  // Render success message
  res.render('contact-success.ejs', { title: 'Contact Us', success: true });
});

module.exports = router;
