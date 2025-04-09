import React, { useState } from "react";
import axios from "axios";
import "./Dashboard.css"; // Make sure to create this CSS file

function Dashboard() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/news", formData)
      .then((res) => {
        alert("✅ News added successfully!");
        setFormData({ title: "", content: "", category: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="dashboard-container">
      <form onSubmit={handleSubmit} className="dashboard-form">
        <h2 className="form-title">📰 Post News</h2>

        <label>Title</label>
        <input
          name="title"
          type="text"
          placeholder="Enter title"
          onChange={handleChange}
          value={formData.title}
          required
        />

        <label>Content</label>
        <textarea
          name="content"
          placeholder="Write your news content..."
          onChange={handleChange}
          value={formData.content}
          required
        />

        <label>Category</label>
        <input
          name="category"
          type="text"
          placeholder="e.g. Politics, Tech, Health"
          onChange={handleChange}
          value={formData.category}
          required
        />

        <button type="submit">🚀 Submit News</button>
      </form>
    </div>
  );
}

export default Dashboard;
