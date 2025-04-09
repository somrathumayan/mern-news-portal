const express = require("express");
const router = express.Router();
const { createNews, getAllNews } = require("../controllers/newsController");

router.post("/", createNews);
router.get("/", getAllNews);

module.exports = router;
