const Option = require('../models/optionModel');

// Create a new option for a question
exports.createOption = async (req, res) => {
  try {
    const { text } = req.body;
    const option = await Option.create({ text, votes: 0 });
    res.status(201).json(option);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an option by ID
exports.deleteOption = async (req, res) => {
  try {
    const option = await Option.findById(req.params.id);
    if (!option) {
      return res.status(404).json({ message: 'Option not found' });
    }

    // Check if option has votes
    if (option.votes > 0) {
      return res.status(400).json({ message: 'Cannot delete an option with votes' });
    }

    await option.remove();
    res.json({ message: 'Option deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
