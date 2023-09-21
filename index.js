const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://gargrishabh7889:Rishabh7889@cluster0.ongg5im.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Define routes
app.use('/questions', require('./routes/questionRoutes'));
app.use('/options', require('./routes/optionRoutes'));
app.use('/votes', require('./routes/voteRoutes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
