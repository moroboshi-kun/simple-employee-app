const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const employeeRoutes = require('./routes/employee');

const app = express();
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/employees', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

// Employee routes
app.use('/api/employees', employeeRoutes);

// Start the server
const PORT = 3080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

