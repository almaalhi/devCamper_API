const express = require('express');
const dotenv = require('dotenv');

//Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: 1, msg: 'Show all bootcamps' }
  });
});

app.get('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: 1, msg: `Show bootcamp ${req.params.id}` }
  });
});

app.post('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: 1, msg: 'Create new bootcamp' }
  });
});

app.put('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: 1, msg: `Update bootcamp ${req.params.id}` }
  });
});

app.delete('/api/v1/bootcamps/:id', (req, res) => {
  res.status(200).json({
    success: true,
    data: { id: 1, msg: `Delete bootcamp ${req.params.id}` }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
