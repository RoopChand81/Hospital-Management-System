# 🏥 Hospital Management System

A full‑stack web application designed to streamline hospital operations — patient management, doctor management, appointment scheduling, role‑based access, and secure medical data handling.

---

## 🌐 Live Deployment  
**Live Link:** _Add your live link here (if deployed)_

---

## 📌 Overview

The Hospital Management System provides a centralized platform where:

- Admins manage doctors, patients, departments, and appointments  
- Doctors manage schedules, view patient details, and handle appointments  
- Patients can register, log in, and book appointments  
- The system ensures secure authentication using **JWT**, **role‑based authorization**, and **MongoDB database management**

---

## 🏛 Project Architecture

```
root/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── context/ or redux/
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    └── vite.config.js
```

---

## 🔁 Workflow

```
User Registers / Logs In
        ↓
Role-Based Dashboard Loaded (Admin / Doctor / Patient)
        ↓
Actions Based on Role:
  - Admin → manage doctors, patients, appointments
  - Doctor → view schedule, manage appointments
  - Patient → book appointments
        ↓
Backend Processes Request → MongoDB
        ↓
Frontend Updates UI in Real-Time
```

---

## ✨ Features

### 👨‍⚕️ Admin Features
- Manage doctors  
- Manage patients  
- Manage appointments  
- Manage departments  
- View analytics (if added)

### 👩‍⚕️ Doctor Features
- View assigned appointments  
- Approve / reject appointments  
- Access patient details  

### 🧑‍💼 Patient Features
- Register/Login  
- View available doctors  
- Book an appointment  
- View appointment history  

### 🔐 Security
- JWT Authentication  
- Role-based Authorization  
- Encrypted passwords (bcrypt)  
- Protected routes  

### 🎨 Modern UI
- Clean dashboard UI  
- Responsive pages  
- Easy navigation  
- API-driven flow with Axios  

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
```

Create **.env** with:

```
PORT=4000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

Run server:

```bash
npm run dev
```

---

## 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🔌 API Endpoints (Sample)

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login user |

### Patients
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/patients | Get all patients |
| POST | /api/patients | Create patient |
| PUT | /api/patients/:id | Update patient |
| DELETE | /api/patients/:id | Delete patient |

### Doctors
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/doctors | Get doctors |
| POST | /api/doctors | Add doctor |

### Appointments
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/appointments | Book appointment |
| GET | /api/appointments | Get appointments |
| PUT | /api/appointments/:id | Update appointment status |

---

## 📄 About

This Hospital Management System helps healthcare centers digitize and automate hospital workflows, reducing manual work and ensuring secure digital records for doctors, patients, and administrators.

---

## 📸 Screenshots  
_Add your screenshot images inside a `/screenshots` folder and reference them like below:_

```
![Dashboard](screenshots/dashboard.png)
![Login Page](screenshots/login.png)
```

---

## 📝 Footer

**© 2025 Hospital Management System — Built ❤️ by Roopchand**

