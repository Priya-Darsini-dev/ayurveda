# 🌿Ayurveda - AI Powered Ayurvedic Wellness Website

Ayurvedam is a full-stack web application that helps users discover traditional Ayurvedic home remedies through an interactive and user-friendly interface. The application provides remedies for various health, skin, and hair concerns, supports voice-based interaction, and dynamically retrieves remedy information from a MongoDB database.

---

## 🌐 Live Demo

**Website:** https://ayurveda-wellness.vercel.app

**Backend API:** https://ayurveda-fo4e.onrender.com


## ✨ Features

### 👤 User Authentication
- User Registration
- User Login
- JWT Authentication
- Profile Management
- Edit Profile
- Logout
- Delete Account

### 🌿 Ayurvedic Remedies
- Health Remedies
- Skin Care Remedies
- Hair Care Remedies
- Dynamic Remedy Pages
- Ingredients with Images
- Step-by-Step Remedy Methods
- Important Notes

### 🎤 Voice Assistant
- Speech Recognition
- Voice Search for Remedies
- Automatic Remedy Detection
- Opens Matching Remedy Page Automatically
- Reads Remedy Details Using Text-to-Speech

### 📱 Responsive UI
- Modern Glassmorphism Design
- Attractive User Interface
- Mobile Friendly Layout
- Smooth Animations

---

# 🛠️ Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Authentication
- JWT (JSON Web Token)
- bcrypt.js

## Voice Technologies
- Web Speech API
- Speech Recognition
- Speech Synthesis

---

# 📂 Project Structure

```
Ayurvedam
│
├── frontend
│   ├── css
│   ├── js
│   ├── remedy-pages
│   ├── images
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── remedies.html
│   ├── health.html
│   ├── skin.html
│   ├── hair.html
│   └── profile.html
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── seedData.js
│   ├── seeder.js
│   ├── server.js
│   └── .env
│
└── README.md
```

---

# 📌 Modules

## Authentication Module
- Register User
- Login User
- JWT Authentication
- Logout
- Delete Account

## Profile Module
- View Profile
- Edit Profile
- Update Profile

## Remedy Module
- Health Remedies
- Skin Remedies
- Hair Remedies
- Dynamic Database Loading

## Voice Assistant Module
- Speech Recognition
- Remedy Search
- Automatic Navigation
- Voice Reading

---

# 📊 Database Collections

## Users

| Field | Type |
|-------|------|
| name | String |
| email | String |
| password | String |

---

## Remedies

| Field | Type |
|-------|------|
| title | String |
| category | String |
| keywords | Array |
| ingredients | Array |
| methods | Array |
| note | String |

---

# 🎤 Voice Assistant Workflow

```
User clicks Microphone
        │
        ▼
Speech Recognition
        │
        ▼
Convert Speech to Text
        │
        ▼
Search MongoDB Database
        │
        ▼
Find Matching Remedy
        │
        ▼
Open Remedy Page
        │
        ▼
Read Remedy Using Speech Synthesis
```

---

# 📷 Screenshots

Add screenshots of:

- Home Page
  <img width="1896" height="857" alt="image" src="https://github.com/user-attachments/assets/af992061-3c93-4322-8b96-0050d8b91309" />
- Login
  <img width="1912" height="866" alt="image" src="https://github.com/user-attachments/assets/0fba69b4-2557-498e-ba2a-e4236f6be6f6" />
- Signup
  <img width="1917" height="853" alt="image" src="https://github.com/user-attachments/assets/13034e1d-8c71-4ae7-9b04-9f0e225a269e" />
- Remedies
  
- Profile


---

# 🔮 Future Enhancements

- Multi-language Support
- Intelligent Health Assistant
- Personalized Remedy Recommendations
- Appointment Booking
- Doctor Consultation

---

# 📚 Learning Outcomes

- Full Stack Web Development
- REST API Development
- MongoDB Integration
- JWT Authentication
- Voice Recognition
- Speech Synthesis
- CRUD Operations
- Responsive Web Design

---

# 👩‍💻 Developed By

**JORIGE PRIYA DARSINI**

B.Tech - Computer Science and Engineering (Artificial Intelligence)


---

# 📄 License

This project is developed for educational purposes.
