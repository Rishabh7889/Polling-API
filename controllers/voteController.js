const Vote = require('../models/voteModel');
const Option = require('../models/optionModel');

// Add a vote to an option
exports.addVote = async (req, res) => {
  try {
    const optionId = req.params.id;
    const option = await Option.findById(optionId);
    if (!option) {
      return res.status(404).json({ message: 'Option not found' });
    }

    // Update the vote count
    option.votes++;
    await option.save();

    // Create a vote record
    await Vote.create({ option: optionId });

    res.json({ message: 'Vote added successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
