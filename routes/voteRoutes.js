const express = require('express');
const router = express.Router();
const voteController = require('../controllers/voteController');

// Increment the count of votes for an option
router.post('/options/:id/add_vote', voteController.addVote);

module.exports = router;
