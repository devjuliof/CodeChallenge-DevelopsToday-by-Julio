require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use(express.json());

const countryRoutes = require('./routes/countryRoutes');
app.use('/api', countryRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
