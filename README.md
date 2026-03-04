# Shopez - E-commerce Website

A full-stack e-commerce application built with React and Node.js/Express, featuring user authentication, product management, shopping cart, and payment integration.

## Project Structure

```
ecommerce-app/
├── backend/                 # Node.js/Express backend
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Custom middleware
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env                # Environment variables
│
└── frontend/               # React/Vite frontend
    ├── src/
    │   ├── pages/          # Page components (Home, About, Contact, Login)
    │   ├── components/     # Reusable components
    │   ├── assets/         # Static assets
    │   ├── App.jsx         # Main app component
    │   └── main.jsx        # Entry point
    ├── package.json        # Frontend dependencies
    └── vite.config.js      # Vite configuration
```

## Features Implemented

### Backend
- ✅ Express.js server setup
- ✅ MongoDB database integration
- ✅ User authentication (JWT + bcrypt)
- ✅ API routes structure
- ✅ Middleware setup
- ✅ Controllers for business logic
- ✅ Models for data structure
- ✅ Payment gateway integration (Razorpay, Stripe)
- ✅ File upload support (Multer)
- ✅ Image storage (Cloudinary)

### Frontend
- ✅ React with Vite
- ✅ React Router for navigation
- ✅ Page components created:
  - Home Page
  - About Page
  - Contact Page
  - Login Page
- ✅ Toast notifications (React Toastify)
- ✅ Project structure and configuration

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB

### Backend Setup
```bash
cd backend
npm install
npm run server
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Available Scripts

### Backend
- `npm start` - Run production server
- `npm run server` - Run development server with nodemon

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Technologies Used

### Backend
- Express.js
- MongoDB/Mongoose
- JWT & bcrypt for authentication
- Razorpay & Stripe for payments
- Cloudinary for image storage
- Multer for file uploads
- Validator for input validation

### Frontend
- React 19
- Vite
- React Router DOM
- React Toastify
- ESLint

## Author
Piyush Mishra

## License
ISC