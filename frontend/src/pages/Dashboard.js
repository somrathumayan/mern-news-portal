import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/news", formData)
      .then(res => {
        alert("News added!");
        setFormData({ title: "", content: "", category: "" });
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Post News</h2>
      <input name="title" placeholder="Title" onChange={handleChange} value={formData.title} />
      <textarea name="content" placeholder="Content" onChange={handleChange} value={formData.content} />
      <input name="category" placeholder="Category" onChange={handleChange} value={formData.category} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Dashboard;
