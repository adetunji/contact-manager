# Contact Manager Express

A fullstack contact management application built with React, Node.js, and Express using TypeScript.

## Project Structure

```
/contact-manager-express
├── client/          # React frontend application
├── server/          # Node.js/Express backend API
├── .gitignore
├── README.md
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies for both client and server:

```bash
# Install all dependencies (workspace)
npm install

# Or install individually:
cd server && npm install
cd ../client && npm install
```

### Running the Application

1. Start the backend server:
```bash
cd server
npm run dev
```

2. Start the frontend development server:
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- Health Check: http://localhost:8000/health

## Features

- View all contacts
- Add new contacts
- Edit existing contacts
- Delete contacts
- Search contacts
- Responsive design

## Technologies Used

### Frontend
- React
- React Router
- Context API for state management
- TypeScript

### Backend
- Node.js
- Express.js
- JSON file storage
- TypeScript 