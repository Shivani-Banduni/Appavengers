// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/autosaveDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define MongoDB Schema
const contentSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const ContentModel = mongoose.model('Content', contentSchema);

// API endpoints
app.post('/api/content', async (req, res) => {
  try {
    const { title, body } = req.body;
    const newContent = new ContentModel({ title, body });
    await newContent.save();
    res.status(201).json(newContent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/api/content/:id', async (req, res) => {
    try {
      const contentId = req.params.id;
      const content = await ContentModel.findById(contentId);
      
      if (!content) {
        return res.status(404).json({ message: 'Content not found' });
      }
  
      res.status(200).json(content);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  app.put('/api/content/:id', async (req, res) => {
    try {
      const contentId = req.params.id;
      const { title, body } = req.body;
  
      const updatedContent = await ContentModel.findByIdAndUpdate(
        contentId,
        { title, body },
        { new: true }
      );
  
      if (!updatedContent) {
        return res.status(404).json({ message: 'Content not found' });
      }
  
      res.status(200).json(updatedContent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.get('/api/content', async (req, res) => {
    try {
      const allContent = await ContentModel.find();
      res.status(200).json(allContent);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  

// Implement other CRUD endpoints (GET, PUT, DELETE)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
