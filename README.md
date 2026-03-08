# Shopez E-commerce Platform

A full-stack e-commerce platform built with the MERN stack, featuring a customer storefront, admin dashboard, and RESTful API backend. This project demonstrates modern web development practices with secure authentication, cloud storage integration, and a responsive user interface.

## Project Overview

Shopez is a complete e-commerce solution consisting of three interconnected applications:

- **Frontend** (`frontend/`) - Customer-facing storefront with product browsing, cart management, and checkout
- **Backend** (`backend/`) - RESTful API server with MongoDB database and Cloudinary image storage
- **Admin Panel** (`admin/`) - Administrative dashboard for product and order management

## Features

### Customer Features (Frontend)
- Browse products by category and subcategory
- Search and filter products
- Product detail pages with image gallery
- Shopping cart management
- User authentication and registration
- Order placement with Cash on Delivery (COD)
- Order history tracking
- Responsive design with Tailwind CSS

### Admin Features (Admin Panel)
- Secure admin authentication
- Product management (Add, List, Remove)
- Order management and status updates
- Image upload with Cloudinary integration
- Real-time toast notifications
- Responsive admin interface

### Backend Features
- RESTful API architecture
- JWT-based authentication with bcrypt password hashing
- Role-based access control (User/Admin)
- MongoDB database with Mongoose ODM
- Cloudinary integration for image storage
- Comprehensive error handling
- CORS-enabled for cross-origin requests

## Repository Structure

```text
ecommerce-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
├── admin/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Backend API Modules

| Module | Base Path | Key Endpoints |
| --- | --- | --- |
| User | `/api/user` | `POST /register`, `POST /login`, `POST /admin` |
| Product | `/api/product` | `POST /add`, `GET /list`, `POST /single`, `POST /remove` |
| Cart | `/api/cart` | `POST /get`, `POST /add`, `POST /update` |
| Order | `/api/order` | `POST /place`, `POST /stripe`, `POST /razorpay`, `POST /userorders`, `POST /list`, `POST /status` |

## Technology Stack

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** with **Mongoose** (v9.2.4) - NoSQL database with object modeling
- **JWT** - Token-based authentication
- **bcrypt** (v6.0.0) - Password hashing and encryption
- **Cloudinary** (v2.9.0) - Cloud-based image storage
- **Multer** (v2.1.1) - Multipart form data handling
- **CORS** - Cross-origin resource sharing
- **Validator** - Input validation and sanitization
- **Stripe** (v20.4.0) & **Razorpay** (v2.9.6) - Payment gateway integrations (pending implementation)

### Frontend & Admin Technologies
- **React** (v19.2.0) - UI library
- **Vite** (v7.3.1) - Build tool and development server
- **React Router DOM** (v7.13.1) - Client-side routing
- **Tailwind CSS** (v3.4.19) - Utility-first CSS framework (frontend only)
- **Axios** (v1.13.6) - HTTP client for API communication
- **React Toastify** (v11.0.5) - Toast notification system
- **ESLint** - Code linting and quality assurance

## Local Development Setup

### Prerequisites
- **Node.js** (v20 or higher)
- **npm** (v9 or higher)
- **MongoDB** instance (MongoDB Atlas or local installation)
- **Cloudinary** account (for image uploads)

### Installation Steps

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd ecommerce-app
```

#### 2. Install Dependencies

Install dependencies for all three applications:

```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install

# Admin panel dependencies
cd ../admin
npm install
```

#### 3. Environment Configuration

Create environment files for the backend and admin panel:

**Backend** (`backend/.env`):
```env
MONGODB_URI=<your-mongodb-connection-string>
CLOUDINARY_NAME=<your-cloudinary-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_SECRET_KEY=<your-cloudinary-secret-key>
JWT_SECRET=<your-jwt-secret>
ADMIN_EMAIL=<admin-email>
ADMIN_PASSWORD=<admin-password>
```

**Admin Panel** (`admin/.env`):
```env
VITE_BACKEND_URL='http://localhost:4000'
```

**Frontend** (`frontend/.env`):
```env
VITE_BACKEND_URL=http://localhost:4000
```

> **⚠️ Security Note**: Never commit `.env` files to version control. These files contain sensitive credentials and are excluded via `.gitignore`.

#### 4. Run Applications

Start all three applications in separate terminal windows:

```bash
# Terminal 1 - Backend Server (runs on port 4000)
cd backend
npm run server

# Terminal 2 - Frontend (runs on port 5173)
cd frontend
npm run dev

# Terminal 3 - Admin Panel (runs on port 5174)
cd admin
npm run dev
```

#### 5. Access the Applications

- **Frontend**: http://localhost:5173
- **Admin Panel**: http://localhost:5174
- **Backend API**: http://localhost:4000

## Scripts

### Backend
- `npm start` - Run backend server with Node.js
- `npm run server` - Run backend server with nodemon (auto-reload on changes)

### Frontend
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint code quality checks
- `npm run preview` - Preview production build locally

### Admin
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run lint` - Run ESLint code quality checks
- `npm run preview` - Preview production build locally

## Future Enhancements

### Payment Gateway Integration

This project is scaffolded for payment gateway integration with **Stripe** and **Razorpay**, but the implementation is pending completion.

#### Stripe Integration (Planned)
- Complete `/api/order/stripe` endpoint implementation
- Add Stripe publishable and secret keys to environment configuration
- Implement webhook handling for payment confirmation
- Create frontend payment flow with Stripe Elements
- Support for multiple currencies (USD, EUR, etc.)
- Handle payment failures and refunds

**Required Environment Variables**:
```env
STRIPE_SECRET_KEY=<your-stripe-secret-key>
```

#### Razorpay Integration (Planned)
- Complete `/api/order/razorpay` endpoint implementation
- Add Razorpay API key and secret to environment configuration
- Implement payment verification callback
- Create frontend payment flow with Razorpay checkout
- Support for INR payments
- Handle payment verification and order confirmation

**Required Environment Variables**:
```env
RAZORPAY_KEY_ID=<your-razorpay-key-id>
RAZORPAY_KEY_SECRET=<your-razorpay-key-secret>
```

#### Implementation Checklist
- [ ] Configure Stripe and Razorpay accounts
- [ ] Complete backend order creation endpoints
- [ ] Implement payment verification logic
- [ ] Add frontend payment UI components
- [ ] Set up webhook handlers for payment status
- [ ] Add payment method selection in checkout flow
- [ ] Implement payment failure handling
- [ ] Add transaction history in user dashboard
- [ ] Test with sandbox/test credentials
- [ ] Document payment flow for developers

### Additional Planned Features
- Product reviews and ratings system
- Wishlist functionality
- Advanced product search with filters
- Email notifications for order updates
- Admin analytics dashboard with charts
- Inventory management system
- Discount codes and coupon system
- Multi-language support
- Mobile application (React Native)

## Deployment Guide

### Deploying to Vercel

This project can be deployed to **Vercel** for hosting the frontend and admin panel. The backend should be deployed separately on a Node.js hosting platform.

#### Prerequisites for Deployment
- Vercel account (free tier available)
- MongoDB Atlas database (for production)
- Cloudinary account configured
- Backend deployed on a Node.js hosting service (Railway, Render, Heroku, etc.)

#### Deploying Frontend to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Prepare Frontend for Deployment**:
   - Ensure all environment variables are set in Vercel dashboard
   - Update `VITE_BACKEND_URL` to point to your production backend URL

3. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your Git repository
   - Set **Root Directory** to `frontend`
   - Configure **Build Settings**:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Add **Environment Variables**:
     ```
     VITE_BACKEND_URL=https://your-backend-url.com
     ```
   - Click "Deploy"

4. **Deploy via CLI**:
   ```bash
   cd frontend
   vercel
   ```

#### Deploying Admin Panel to Vercel

Follow the same steps as frontend deployment, but:
- Set **Root Directory** to `admin`
- Use the same build configuration
- Add environment variable:
  ```
  VITE_BACKEND_URL='https://your-backend-url.com'
  ```

#### Backend Deployment Options

The backend requires a Node.js hosting environment. Consider these platforms:

**Option 1: Railway**
- Connect your GitHub repository
- Set root directory to `backend`
- Add all environment variables from `backend/.env`
- Railway will auto-detect Node.js and deploy

**Option 2: Render**
- Create a new Web Service
- Connect your repository
- Set build command: `npm install`
- Set start command: `npm start`
- Add environment variables
- Deploy

**Option 3: Heroku**
- Install Heroku CLI
- Create new app: `heroku create your-app-name`
- Set buildpack: `heroku buildpacks:set heroku/nodejs`
- Add environment variables: `heroku config:set KEY=value`
- Deploy: `git push heroku main`

#### Post-Deployment Checklist
- [ ] Verify environment variables are set correctly
- [ ] Test user registration and login
- [ ] Test product browsing and cart functionality
- [ ] Test admin login and product management
- [ ] Verify image uploads work with Cloudinary
- [ ] Test order placement with COD
- [ ] Check CORS settings allow frontend domain
- [ ] Monitor application logs for errors
- [ ] Set up custom domain (optional)
- [ ] Enable HTTPS (usually automatic on Vercel)

#### Performance Optimization Tips
- Enable Vercel Edge Network for global CDN
- Optimize images before uploading to Cloudinary
- Use Vercel Analytics to monitor performance
- Enable gzip compression (automatic on Vercel)
- Implement lazy loading for images
- Minify and tree-shake unused code (handled by Vite)

## Important Notes and Best Practices

- **Backend URL**: Always use `http://localhost:4000` for local development (not `https`)
- **Development Server**: Use `npm run server` for backend development (includes auto-reload with nodemon)
- **Security**: Never commit `.env` files or expose sensitive credentials
- **CORS**: Backend is configured to accept requests from frontend and admin origins
- **Image Storage**: All product images are stored on Cloudinary, not locally
- **Authentication**: JWT tokens are used for user and admin authentication
- **Admin Credentials**: Set secure admin email and password in `backend/.env`
- **Database**: Use MongoDB Atlas for production deployments
- **Error Handling**: All API endpoints include comprehensive error handling and validation

## Troubleshooting

### Common Issues

**Issue**: Cannot connect to MongoDB
- **Solution**: Verify `MONGODB_URI` in backend/.env is correct
- Check network access settings in MongoDB Atlas

**Issue**: Images not uploading
- **Solution**: Verify Cloudinary credentials in backend/.env
- Ensure Cloudinary account is active

**Issue**: Admin login not working
- **Solution**: Check `ADMIN_EMAIL` and `ADMIN_PASSWORD` match your credentials
- Verify backend is running on port 4000

**Issue**: Products not displaying in frontend
- **Solution**: Ensure backend API is running
- Check `VITE_BACKEND_URL` in frontend/.env points to correct backend URL

**Issue**: CORS errors in browser console
- **Solution**: Backend CORS is configured for `http://localhost:5173` and `http://localhost:5174`
- Verify frontend is running on correct port

## API Documentation

### Authentication Endpoints

**User Registration** - `POST /api/user/register`
- Body: `{ name, email, password }`
- Returns: JWT token

**User Login** - `POST /api/user/login`
- Body: `{ email, password }`
- Returns: JWT token

**Admin Login** - `POST /api/user/admin`
- Body: `{ email, password }`
- Returns: JWT token (validates against ADMIN_EMAIL and ADMIN_PASSWORD)

### Product Endpoints

**Add Product** - `POST /api/product/add` (Admin only)
- Requires: multipart/form-data with images
- Returns: Product details

**List Products** - `GET /api/product/list`
- Returns: Array of all products

**Get Single Product** - `POST /api/product/single`
- Body: `{ productId }`
- Returns: Product details

**Remove Product** - `POST /api/product/remove` (Admin only)
- Body: `{ id }`
- Returns: Success message

### Cart Endpoints

**Get Cart** - `POST /api/cart/get`
- Requires: Authentication token
- Returns: User's cart data

**Add to Cart** - `POST /api/cart/add`
- Requires: Authentication token
- Body: `{ itemId, size }`
- Returns: Success message

**Update Cart** - `POST /api/cart/update`
- Requires: Authentication token
- Body: `{ itemId, size, quantity }`
- Returns: Success message

### Order Endpoints

**Place Order** - `POST /api/order/place`
- Requires: Authentication token
- Body: `{ items, amount, address }`
- Returns: Order confirmation

**Get User Orders** - `POST /api/order/userorders`
- Requires: Authentication token
- Returns: Array of user's orders

**List All Orders** - `POST /api/order/list` (Admin only)
- Returns: Array of all orders

**Update Order Status** - `POST /api/order/status` (Admin only)
- Body: `{ orderId, status }`
- Returns: Success message

## Author

Piyush Mishra , Diksha Jadhav, Pranav Nagur , Pranav Chinthala .

