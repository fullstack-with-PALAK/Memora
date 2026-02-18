# Memora 📸

A full-stack MERN application for sharing and preserving your precious memories.

![Memora App](https://img.shields.io/badge/MERN-Stack-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Create Memories** - Share your favorite moments with images and descriptions
- **Edit & Update** - Modify your memories anytime
- **Like System** - Show appreciation for others' memories
- **Search** - Find memories by title, tags, or creator
- **Responsive Design** - Works beautifully on desktop and mobile
- **Real-time Updates** - Instant UI updates with Redux

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux (State Management)
- Material-UI (Components & Styling)
- Axios (API Requests)

### Backend
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account or local MongoDB

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/fullstack-with-PALAK/Memora.git
   cd Memora
   ```

2. **Setup Server**
   ```bash
   cd server
   npm install
   ```
   
3. **Configure MongoDB**
   - Update `CONNECTION_URL` in `server/index.js` with your MongoDB connection string

4. **Setup Client**
   ```bash
   cd ../client
   npm install
   ```

5. **Run the application**
   
   Start Server:
   ```bash
   cd server
   npm start
   ```
   
   Start Client (in new terminal):
   ```bash
   cd client
   npm start
   ```

## 📁 Project Structure

```
memora/
├── client/                 # React Frontend
│   ├── public/
│   └── src/
│       ├── actions/        # Redux Actions
│       ├── api/            # API Service
│       ├── components/     # React Components
│       ├── constants/      # Action Types
│       ├── reducers/       # Redux Reducers
│       └── images/
├── server/                 # Express Backend
│   ├── controllers/        # Route Controllers
│   ├── models/             # Mongoose Models
│   └── routes/             # API Routes
└── README.md
```

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all posts |
| POST | `/posts` | Create a post |
| PATCH | `/posts/:id` | Update a post |
| DELETE | `/posts/:id` | Delete a post |
| PATCH | `/posts/:id/likePost` | Like a post |

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is licensed under the MIT License.

---

Made with ❤️ by Palak
