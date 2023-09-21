const express = require('express');
const router = express.Router();
const optionController = require('../controllers/optionController');

// Add options to a specific question
router.post('/:id/options/create', optionController.createOption);

// Delete an option by ID
router.delete('/:id/delete', optionController.deleteOption);

module.exports = router;
