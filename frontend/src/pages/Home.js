import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css"; // Import the CSS file

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/news")
      .then((res) => setNews(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="home-container">
      <h2 className="home-title">📰 Latest News</h2>

      <div className="news-grid">
        {news.map((item) => (
          <div key={item._id} className="news-card">
            <h3 className="news-title">{item.title}</h3>
            <p className="news-content">{item.content}</p>
            <span className="news-category">📁 {item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
