# 📇 Contact Management App (MERN Stack)

## 🚀 Overview

A simple Contact Management Web App built using the MERN stack (MongoDB, Express, React, Node.js).
This application allows users to **Create, Read, Update, and Delete (CRUD)** contacts.

---

## 🛠️ Tech Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB
* API Testing: Postman

---

## ✨ Features

* Add new contacts
* View all contacts
* Update contact details
* Delete contacts
* RESTful API integration

---

## 📂 Project Structure

```
backend/
frontend/
README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/contact-manager.git
cd contact-manager
```

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

Run backend:

```
node server.js
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm start
```

---

## 🔌 API Endpoints

| Method | Endpoint          | Description      |
| ------ | ----------------- | ---------------- |
| GET    | /api/contacts     | Get all contacts |
| POST   | /api/contacts     | Create contact   |
| PUT    | /api/contacts/:id | Update contact   |
| DELETE | /api/contacts/:id | Delete contact   |

---


## 🌐 Future Enhancements

* Authentication (JWT)
* Search & Filter
* Pagination
* Responsive UI
* Deployment (Vercel + Render)

---

## 👨‍💻 Author

Your Name

---

## 📜 License

This project is licensed under the MIT License.
