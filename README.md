# 🤖 AI Chat App

A Full Stack AI Chat Application built using React.js and Spring Boot.

---

## 🚀 Features

- AI Chat Response
- React Frontend
- Spring Boot Backend
- REST API Integration
- Markdown Support
- Fast UI using Vite
- Environment Variable Security

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend
- Spring Boot
- Java
- Maven

### API
- Groq API / Gemini API

---

## 📂 Project Structure

AI-Chat-App
│
├── Frontend
│ ├── src
│ ├── package.json
│
├── Backend
│ ├── Gemini
│ ├── src/main/java
│ ├── src/main/resources
│
└── README.md

---

## ⚙️ Setup Instructions

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

### Backend

```bash
cd Backend/Gemini
mvn spring-boot:run
```

Backend runs on:

```bash
http://localhost:8083
```

---

## 🔐 Environment Variable

Create environment variable:

```bash
GEMINI_API_KEY=YOUR_API_KEY
```

application.properties:

```properties
Gemini.API.Key=${GEMINI_API_KEY}
```

---

## 📸 Screenshots

(Add your project screenshots here)

---

## 👨‍💻 Author

Manoj Kumar VC

GitHub:
https://github.com/ManojKumarVC01

---

## ⭐ GitHub Repository

If you like this project, give it a ⭐ on GitHub.
