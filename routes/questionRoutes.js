const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Create a question
router.post('/create', questionController.createQuestion);

// Get a question by ID
router.get('/:id', questionController.getQuestion);

// Delete a question by ID
router.delete('/:id/delete', questionController.deleteQuestion);

module.exports = router;
