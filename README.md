# 🏠 Wanderlust

A full-stack listing platform where users can view, post, and manage property or item listings. Inspired by rental/marketplace apps like Airbnb or OLX.

🌐 **Live Demo:**  
👉 [ronak-project.onrender.com/listings](https://ronak-project.onrender.com/listings)

---

## 🚀 Features

- 📋 View all listings
- 🔍 View detailed listing info
- ➕ Add new listings (title, description, price, location)
- 🗑️ Delete listings
- 📦 RESTful backend integrated with MongoDB

---

## 🛠️ Tech Stack

### 🔹 Frontend:
- HTML, CSS, EJS (Embedded JavaScript)

### 🔹 Backend:
- Node.js
- Express.js
- MongoDB + Mongoose

### 🔹 Other Tools:
- Render (Deployment)
- Git & GitHub (Version Control)

---

## 📁 Folder Structure

```plaintext
📦 listings-app/
├── models/
│   └── listing.js         # Mongoose schema
├── routes/
│   └── listings.js        # Routes for CRUD
├── views/
│   ├── listings/          # EJS templates
│   └── layout.ejs         # Main layout
├── public/
│   └── styles.css         # CSS styles
├── app.js                 # Main server file
└── package.json           # Dependencies
