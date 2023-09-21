const Question = require('../models/questionModel');

// Create a new question
exports.createQuestion = async (req, res) => {
  try {
    const { title } = req.body;
    const question = await Question.create({ title, options: [] });
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a question by ID
exports.getQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id).populate('options');
    res.json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a question by ID
exports.deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    // Check if any options have votes
    const hasVotes = question.options.some(option => option.votes > 0);
    if (hasVotes) {
      return res.status(400).json({ message: 'Cannot delete a question with votes' });
    }

    await question.remove();
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
