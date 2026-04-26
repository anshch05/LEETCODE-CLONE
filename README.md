# CodeDojo 🥋

A full-stack competitive coding platform inspired by LeetCode — where users can practice DSA problems, execute code in real-time, and get AI-powered help, all in one place.

---

## 🚀 Features

### 👤 User
- Register, Login, Logout with secure **JWT Authentication**
- **Redis-based token invalidation** on logout for enhanced security
- Browse and filter problems by **difficulty, tags, and solved/unsolved status**
- Solve problems using **Monaco Editor** with support for JavaScript, Java, and C++
- Submit code and get instant results via **Judge0 API**
- View **submission history** for every problem
- Watch **video solutions** (hosted on Cloudinary)
- Chat with an **AI assistant** (per-problem context) for hints and debugging help

### 🛡️ Admin
- Secure **Admin Panel** with role-based access control
- Create, Update, and Delete problems
- Upload and manage video solutions via Cloudinary

### ⚙️ Backend & Security
- **Rate limiter middleware** to prevent API abuse
- Custom middlewares: `adminMiddleware`, `userMiddleware`, `submitRateLimiter`
- RESTful API architecture with **MVC pattern**

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React.js, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Auth | JWT, Redis |
| Code Execution | Judge0 API |
| Code Editor | Monaco Editor |
| AI Chatbot | Gemini API |
| Media Storage | Cloudinary |

---

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- MongoDB
- Redis
- Judge0 API Key
- Gemini API Key
- Cloudinary Account

### Backend Setup
```bash
git clone https://github.com/anshch05/CodeDojo.git
cd CodeDojo/backend
npm install
```

Create a `.env` file in the backend folder:
```env
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_url
JUDGE0_API_KEY=your_judge0_key
GEMINI_API_KEY=your_gemini_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

```bash
npm run dev
```

### Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

---

## 📁 Project Structure

```
CodeDojo/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
└── README.md
```

---

## 👨‍💻 Author

**Ansh Chhetri**
- GitHub: [@anshch05](https://github.com/anshch05)
- LinkedIn: [ansh-chhetri](https://www.linkedin.com/in/ansh-chhetri-6466a3296/)

---

> ⭐ If you found this project helpful, consider giving it a star!
