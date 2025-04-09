import React, { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/news")
      .then(res => setNews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      {news.map((item) => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
