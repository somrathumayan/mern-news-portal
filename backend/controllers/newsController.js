const News = require("../models/News");

// Create news
exports.createNews = async (req, res) => {
  try {
    const news = new News(req.body);
    await news.save();
    res.status(201).json(news);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all news
exports.getAllNews = async (req, res) => {
  try {
    const newsList = await News.find().sort({ createdAt: -1 });
    res.json(newsList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
