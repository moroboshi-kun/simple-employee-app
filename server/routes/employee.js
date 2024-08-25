const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Create a new employee
router.post('/', async (req, res) => {
  const { firstName, lastName } = req.body;
  const employeeId = uuidv4(); // Generate a unique ID

  try {
    const employee = new Employee({ firstName, lastName, employeeId });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create employee' });
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch employees' });
  }
});

module.exports = router;

