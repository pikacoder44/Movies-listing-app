# 🎬 Movie Browsing App

A beautiful React-based movie browsing web app that allows users to discover and favorite popular movies using **The Movie Database (TMDB) API**.

---

## 🚀 Features

- 📃 **Home Page** (`/`)

  - Displays a list of **popular movies** fetched from TMDB.
  - Includes a 🔍 **search bar** to find movies by title.
  - Each movie has a ❤️ **heart icon** to **add/remove from favorites**.

- ⭐ **Favorites Page** (`/favorites`)

  - Displays a list of all your **favorited movies**.
  - Favorites are stored in the browser's **localStorage** for persistence.
  - Works even after refreshing or reopening the app.

- 📦 **Frontend Only**
  - This is a frontend-only React project (no backend or database).
  - Favorites are **not stored on a server**, but locally in the user's browser.

---

## 📸 Screenshots

![alt text](<Screenshot 2025-06-20 162053.png>)
![alt text](<Screenshot 2025-06-20 162137.png>)
![alt text](<Screenshot 2025-06-20 162207.png>)

---

## 🛠️ Tech Stack

- ⚛️ React.js
- 🎨 CSS (custom + responsive)
- 🔁 React Context API (for global favorites state)
- 🧠 `useEffect`, `useState` for side effects and state handling
- 📁 `localStorage` for data persistence

---

## 🔐 TMDB API Setup

This app uses the official API from [The Movie Database (TMDB)](https://www.themoviedb.org/).

To run the app:

1. Create a free account on [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. Go to your **Profile → Settings → API**.
3. Generate your **API Key (v3 auth)**.
4. Replace the API key in `api.js`:

```js
const API_KEY = "your_api_key_here";


## 📁 Folder Structure
src/
│
├── components/
│   ├── MovieCard.jsx
│   └── Navbar.jsx
├── contexts/
│   └── MovieContext.jsx
├── css/
│   ├── App.css
│   ├── Favorites.css
│   ├── Home.css
│   ├── index.css
│   ├── MovieCard.css
│   └── Navbar.css
├── pages/
│   ├── Favorites.jsx
│   └── Home.jsx
├── services/
│   └── api.js
├── App.jsx
└── main.jsx
```

## ⚙️ Getting Started

### Clone the repository

git clone https://github.com/yourusername/movie-browsing-app.git
cd movie-browsing-app

### Install dependencies

npm install

### Run the app

npm run dev

### Open in browser

http://localhost:5173

## 🤝 Credits

API by: TMDB (The Movie Database)
IB: Tech With Tim
Created by: Hashir Shah

## 🪄 License

This project is open-source and available under the MIT License.
