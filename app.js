const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');


// Routes
const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');
const contactRoute = require('./routes/contact');

app.use('/', indexRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/public/', express.static('./public'));

// Error handling
app.use((req, res, next) => {
  res.status(404).render('error404.ejs');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('error500.ejs');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
