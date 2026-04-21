# React Authentication App

A simple React JS application built as a final project, featuring authentication, registration, and a user dashboard.

## Features

- Login page with form validation using `useReducer`
- Registration page with `useState`
- Protected dashboard accessible only after login
- Navigation between pages using React Router
- Global auth state managed with `useContext`

## Project Structure

[200~src/
├── context/
│   └── UserContext.jsx    # Global auth state
├── pages/
│   ├── Login.jsx          # Login form
│   ├── Inscription.jsx    # Registration form
│   └── Dashboard.jsx      # User dashboard
├── App.jsx                # Routes configuration
└── main.jsx               # Entry point~
## Tech Stack

- React JS
- React Router v6
- Vite

## Getting Started

```bash
npm install
npm run dev
```

## Demo Credentials

Use any email and password you set in `Login.jsx`.
