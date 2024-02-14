const express = require('express');
const router = express.Router();

// Sample team members


router.get('/', (req, res) => {
  res.render('about.ejs', { title: 'About Us' });
});

module.exports = router;




