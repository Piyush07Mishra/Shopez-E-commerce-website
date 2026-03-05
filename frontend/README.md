# 🛍️ Shopez - E-commerce Website (Frontend)

A modern, responsive React + Vite frontend for a full-stack e-commerce platform. This is the **customer-facing interface** of the Shopez e-commerce application, featuring product browsing, shopping cart management, order placement, and user authentication integration.

**Current Status:** ✅ Frontend UI fully implemented | ⏳ Backend & API integration in progress

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation Guide](#installation-guide)
- [Running the Project](#running-the-project)
- [Available Routes](#available-routes)
- [Environment Configuration](#environment-configuration)
- [Development Guidelines](#development-guidelines)
- [Backend Status](#backend-status)
- [Future Improvements](#future-improvements)
- [Contribution Guide](#contribution-guide)
- [License](#license)

---

## 🎯 Overview

**Shopez** is a comprehensive e-commerce platform designed to provide users with a seamless shopping experience. The frontend is built with modern technologies to ensure performance, accessibility, and maintainability.

This repository contains the **React + Vite frontend** implementation. The primary focus has been on creating a complete, interactive UI with all necessary components, pages, and state management in place.

The backend APIs and database integration are currently **under development** and will be integrated in future updates.

---

## ✨ Features (Frontend Implemented)

### Pages
- ✅ **Home Page** - Hero section, featured products, promotions, and newsletter signup
- ✅ **Product Collection** - Browse all products with filtering and sorting capabilities
- ✅ **Product Detail Page** - Detailed product information with images, sizes, and specifications
- ✅ **Shopping Cart** - Complete cart management with quantity adjustment and price calculation
- ✅ **Checkout / Place Order** - Order placement interface (awaiting backend integration)
- ✅ **Login / Sign Up** - User authentication interface (awaiting backend API)
- ✅ **User Orders** - View user's order history (awaiting backend integration)
- ✅ **About Page** - Company information and policies
- ✅ **Contact Page** - Customer support and contact information

### User Interface Components
- ✅ **Navbar** - Navigation menu with search and cart access
- ✅ **Footer** - Site footer with links and information
- ✅ **Search Bar** - Global product search functionality
- ✅ **Product Listings** - Product cards with images and pricing
- ✅ **Cart Total** - Subtotal, delivery fee, and total calculation
- ✅ **Toast Notifications** - User feedback for actions (add to cart, errors, etc.)
- ✅ **Related Products** - Product recommendations on detail page
- ✅ **Newsletter Subscription** - Email subscription component
- ✅ **Company Policies** - Display of shipping and return policies

### Technical Features
- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Tailwind CSS Styling** - Utility-first CSS framework for consistent styling
- ✅ **Client-side Routing** - React Router for seamless page navigation
- ✅ **State Management** - Context API with ShopContext for global state
- ✅ **Form Handling** - Login/signup and checkout forms
- ✅ **Import Optimization** - Fast load times with modern bundling
- ✅ **ESLint Configuration** - Code quality and consistency enforcement
- ✅ **Reactive Components** - React 19 with modern hooks and best practices

---

## 🛠️ Tech Stack

### Frontend Technologies

| Technology | Purpose | Version |
|---|---|---|
| **React** | UI library for building components | 19.2.0 |
| **Vite** | Modern build tool and dev server | 7.3.1 |
| **Tailwind CSS** | Utility-first CSS framework | 3.4.19 |
| **React Router DOM** | Client-side routing solution | 7.13.1 |
| **Axios** | HTTP client for API requests | 1.13.6 |
| **React Toastify** | Toast notifications | 11.0.5 |
| **PostCSS** | CSS processing tool | 8.5.8 |
| **Autoprefixer** | Vendor prefixes for CSS | 10.4.27 |
| **ESLint** | Code quality tool | 9.39.1 |
| **Vite React Plugin** | React support for Vite | 5.1.1 |
| **Babel Compiler** | React compiler integration | 1.0.0 |

### Backend (Planned - Not Yet Implemented)

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web application framework |
| **MongoDB** | NoSQL database |
| **JWT (JSON Web Tokens)** | User authentication |
| **bcrypt** | Password hashing |
| **Cloudinary** | Image storage and management |
| **Stripe / Razorpay** | Payment gateway integration |
| **Multer** | File upload handling |
| **Mongoose** | MongoDB object modeling |
| **CORS** | Cross-origin request handling |

---

## 📁 Project Structure

```
frontend/
├── 📄 package.json                 # Project dependencies and scripts
├── 📄 vite.config.js               # Vite configuration
├── 📄 tailwind.config.js          # Tailwind CSS configuration
├── 📄 postcss.config.js           # PostCSS configuration
├── 📄 eslint.config.js            # ESLint rules configuration
├── 📄 index.html                  # HTML entry point
├── 📁 public/                      # Static assets (images, fonts, etc.)
│
└── 📁 src/                         # Source code directory
    ├── 📄 main.jsx                # Application entry point
    ├── 📄 App.jsx                 # Root component with routing
    ├── 📄 index.css               # Global styles
    │
    ├── 📁 pages/                  # Page components
    │   ├── Home.jsx              # Landing page
    │   ├── Collection.jsx        # Product collection with filters
    │   ├── Product.jsx           # Individual product detail page
    │   ├── Cart.jsx              # Shopping cart management
    │   ├── PlaceOrder.jsx        # Checkout and order placement
    │   ├── Orders.jsx            # User's order history
    │   ├── Login.jsx             # Authentication page
    │   ├── About.jsx             # About company page
    │   └── Contact.jsx           # Contact page
    │
    ├── 📁 components/             # Reusable UI components
    │   ├── Navbar.jsx            # Navigation bar
    │   ├── Footer.jsx            # Footer section
    │   ├── Hero.jsx              # Hero section on homepage
    │   ├── SearchBar.jsx         # Global search functionality
    │   ├── ProductItem.jsx       # Individual product card
    │   ├── LatestCollection.jsx  # Latest products section
    │   ├── Bestseller.jsx        # Best-selling products section
    │   ├── Relatedproducts.jsx   # Related products section
    │   ├── CartTotal.jsx         # Cart total calculation display
    │   ├── NewsletterBox.jsx     # Newsletter subscription form
    │   ├── Ourpolicy.jsx         # Company policies display
    │   └── Title.jsx             # Reusable section title component
    │
    ├── 📁 context/                # Global state management
    │   └── ShopContext.jsx       # Context provider with shop data
    │                              # (currency, products, cart, user, etc.)
    │
    └── 📁 assets/                 # Static assets
        └── assets.js             # Assets configuration and imports
```

### Key Files Explained

| File | Purpose |
|---|---|
| **main.jsx** | React DOM render entry point; wraps app with BrowserRouter and ShopContextProvider |
| **App.jsx** | Defines all routes using React Router; layout wrapper with Navbar, Footer, SearchBar |
| **ShopContext.jsx** | Global state: products, cart items, user auth, currency, delivery fees |
| **vite.config.js** | Vite build config with React plugin and Babel compiler integration |
| **tailwind.config.js** | Tailwind CSS setup for styling all components |

---

## 📦 Installation Guide

### Prerequisites
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** (v9 or higher) - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Step-by-Step Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Piyush07Mishra/Shopez-E-commerce-website.git
   cd Shopez-E-commerce-website
   ```

2. **Navigate to Frontend Directory**
   ```bash
   cd frontend
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages listed in `package.json`:
   - React and React DOM
   - Vite and build tools
   - Tailwind CSS and PostCSS
   - React Router DOM for navigation
   - Axios for API calls
   - React Toastify for notifications
   - ESLint for code quality

4. **Verify Installation**
   ```bash
   npm list
   ```
   
   You should see a tree of all installed packages without errors.

### Environment Setup (Optional)

Create a `.env` file in the `frontend/` directory for environment variables:

```env
# Backend API URL (once backend is deployed)
VITE_BACKEND_URL=http://localhost:4000

# Add other environment variables as needed
```

> **Note:** The `VITE_` prefix is required for Vite to expose these variables to the frontend.

---

## 🚀 Running the Project

### Development Mode
Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

**Output:**
```
  VITE v7.3.1  ready in 1715 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

**Open your browser** and navigate to: `http://localhost:5173/`

### Production Build
Create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with minified and optimized files.

### Preview Production Build
Preview the production build locally:

```bash
npm run preview
```

### Linting
Run ESLint to check code quality:

```bash
npm run lint
```

---

## 🗺️ Available Routes

The application uses React Router for client-side navigation. All routes are defined in [App.jsx](src/App.jsx):

| Route | Page | Description |
|---|---|---|
| `/` | Home | Landing page with hero, featured products, and promotions |
| `/collection` | Collection | Browse all products with filtering and sorting |
| `/product/:productId` | Product Detail | Individual product information with images and sizes |
| `/cart` | Shopping Cart | View and manage items in the shopping cart |
| `/place-order` | Checkout | Order placement and payment (awaiting backend) |
| `/orders` | My Orders | View user's order history (requires authentication) |
| `/login` | Login/Sign Up | User authentication interface |
| `/about` | About Us | Company information and mission |
| `/contact` | Contact Us | Contact form and support information |

### Navigation Structure

```
Home (/)
├── Product Collection (/collection)
│   └── Product Detail (/product/:productId)
│       └── Add to Cart → Shopping Cart (/cart)
│           └── Checkout (/place-order) [Requires Login]
├── About (/about)
├── Contact (/contact)
└── Login (/login)
    ├── Sign Up
    └── My Orders (/orders)
```

---

## ⚙️ Environment Configuration

### Available Environment Variables

#### For Backend Integration (Future)
```env
# Backend API URL
VITE_BACKEND_URL=http://localhost:4000

# Optional: API timeouts, keys, etc.
VITE_API_TIMEOUT=30000
```

### Accessing Environment Variables in Code

All environment variables are accessed using `import.meta.env`:

```javascript
// Example in ShopContext.jsx
const backendUrl = import.meta.env.VITE_BACKEND_URL;
```

---

## 👨‍💻 Development Guidelines

### Code Style & Conventions

- **Component Structure:** Functional components with React Hooks
- **State Management:** Context API for global state, useState for local state
- **Styling:** Tailwind CSS utility classes (no custom CSS unless necessary)
- **Routing:** React Router v7 for all navigation
- **API Calls:** Axios with async/await
- **Error Handling:** Try-catch with toast notifications to users
- **Form Validation:** Client-side validation before submission

### Component Guidelines

1. **Create components as functional components:**
   ```javascript
   const MyComponent = () => {
     return <div>Content</div>;
   };
   ```

2. **Use Context for shared data:**
   ```javascript
   const { products, addToCart } = useContext(ShopContext);
   ```

3. **Provide user feedback:**
   ```javascript
   import { toast } from 'react-toastify';
   toast.success('Item added to cart!');
   toast.error('Please select a size');
   ```

4. **Keep components small and focused** on a single responsibility

5. **Use Tailwind classes** for responsive design:
   ```jsx
   <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
   ```

### Useful ESLint Rules

The ESLint configuration enforces:
- No unused variables (except uppercase/underscore-prefixed ones)
- React hooks rules compliance
- React refresh best practices

Run linting: `npm run lint`

---

## 📊 State Management (ShopContext)

The global state is managed through **ShopContext** with the following main properties:

### Context Provider Structure

```javascript
// ShopContext manages:
- currency: '$'                 // Display currency
- delivery_fee: 10              // Delivery cost
- backendUrl: string            // Backend API URL
- products: []                  // All products array
- cartItems: {}                 // Cart items object
- search: string                // Search query
- showSearch: boolean           // Search bar visibility toggle
- token: string                 // User authentication token
```

### Key Functions

```javascript
addToCart(itemId, size)         // Add product to cart
updateQuantity(itemId, size, qty) // Update cart item quantity
removeFromCart(itemId, size)    // Remove item from cart
removeAllFromCart()             // Clear entire cart
getCartAmount()                 // Calculate total amount
getCartCount()                  // Count total items
```

---

## 🔌 Backend Status

### Current Status
❌ **The backend is NOT yet completed**

### What You Need to Know

1. **Frontend is ready** for backend integration
2. **API endpoints are expected** at the backend URL (see Environment Configuration)
3. **Authentication tokens** are handled via ShopContext
4. **All API calls use Axios** with proper headers

### Expected Backend Endpoints (For Future Development)

```
Authentication:
- POST   /api/user/register      - User sign up
- POST   /api/user/login         - User login

Products:
- GET    /api/product/list       - Get all products
- GET    /api/product/:id        - Get product details

Cart:
- POST   /api/cart/add           - Add item to cart
- GET    /api/cart/get           - Fetch cart items
- POST   /api/cart/update        - Update cart quantity
- POST   /api/cart/remove        - Remove cart item

Orders:
- POST   /api/order/place        - Create new order
- GET    /api/order/userorders   - Get user's orders
- POST   /api/order/verify       - Verify payment

Payment:
- POST   /api/payment/stripe     - Stripe payment
- POST   /api/payment/razorpay   - Razorpay payment
```

### What to Do Next (Backend Development)

1. Set up Node.js/Express server
2. Configure MongoDB connection
3. Implement user authentication with JWT
4. Create API endpoints matching the above structure
5. Implement payment gateway integration
6. Configure CORS for frontend-backend communication
7. Set up environment variables for database and keys
8. Test all APIs before connecting to frontend

---

## 🎯 Future Improvements

### Planned Features

- ✋ **Backend API Integration**
  - Connect all frontend forms and data fetches to APIs
  - Implement real database storage
  - Add user authentication and authorization

- 🔐 **Advanced Security**
  - Implement refresh token mechanism for JWT
  - Add rate limiting
  - Implement CSRF protection

- 💳 **Payment Integration**
  - Stripe payment processing
  - Razorpay integration
  - Multiple payment methods

- 📊 **Admin Dashboard** (separate application)
  - Product management
  - Order tracking
  - User management
  - Analytics and reports

- 🔍 **Enhanced Search**
  - Advanced filtering
  - Search suggestions
  - Recently viewed products

- 💬 **User Features**
  - Product reviews and ratings
  - Wishlist functionality
  - User profile management
  - Order tracking with real-time updates

- 📱 **Mobile Optimization**
  - Progressive Web App (PWA) support
  - Offline functionality
  - Push notifications

- ⚡ **Performance Optimization**
  - Image lazy loading
  - Code splitting by routes
  - Analytics integration
  - SEO optimization

- 🌐 **Internationalization**
  - Multi-language support
  - Multi-currency support
  - Regional payment methods

---

## 🤝 Contribution Guide

We welcome contributions! Here's how to contribute:

### 1. Fork and Clone
```bash
# Fork the repository on GitHub
git clone https://github.com/YOUR_USERNAME/Shopez-E-commerce-website.git
cd Shopez-E-commerce-website/frontend
```

### 2. Create a Branch
```bash
# Create a new feature branch
git checkout -b feature/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 3. Make Changes
- Follow the code style guidelines above
- Write clean, readable code
- Test your changes locally
- Keep commits small and meaningful

### 4. Commit and Push
```bash
# Stage your changes
git add .

# Commit with descriptive message
git commit -m "Add feature: description of changes"

# Push to your fork
git push origin feature/your-feature-name
```

### 5. Create a Pull Request
- Go to the original repository
- Click "New Pull Request"
- Select your branch and provide a clear description
- Reference any related issues
- Wait for review and feedback

### Contribution Standards

- **Code Quality:** Must pass ESLint checks (`npm run lint`)
- **Responsiveness:** All features must work on mobile, tablet, and desktop
- **Accessibility:** Follow semantic HTML and ARIA guidelines
- **Documentation:** Update README if adding new features
- **Testing:** Test thoroughly before submitting PR

---

## 📄 License

This project is licensed under the **ISC License**. See the [LICENSE](../LICENSE) file for details.

---

## 📞 Support & Questions

For questions or issues:

1. **Check existing issues** on GitHub
2. **Create a new GitHub issue** with:
   - Clear description of the problem
   - Steps to reproduce (if it's a bug)
   - Your environment (Node version, OS, etc.)
   - Screenshots/error messages (if applicable)

3. **Contact the team:**
   - GitHub: [Piyush07Mishra](https://github.com/Piyush07Mishra)
   - Email: Check repository for contact information

---

## 🎉 Acknowledgments

- **React Team** - For the amazing React library
- **Vite Team** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **React Router** - For client-side routing solution

---

## 📝 Development Timeline

**Current Phase:** Frontend UI Development (COMPLETED)

- ✅ Phase 1: Frontend components and pages
- ✅ Phase 2: Routing and state management  
- ⏳ Phase 3: Backend API development
- ⏳ Phase 4: API integration with frontend
- ⏳ Phase 5: Testing and deployment
- ⏳ Phase 6: Admin dashboard

---

**Last Updated:** March 2026  
**Frontend Version:** 0.0.0  
**Project Status:** 🟡 In Active Development

---

## 📚 Additional Resources

- **React Documentation:** https://react.dev
- **Vite Documentation:** https://vite.dev
- **Tailwind CSS Documentation:** https://tailwindcss.com
- **React Router Documentation:** https://reactrouter.com
- **Axios Documentation:** https://axios-http.com

---

<div align="center">

**Built with ❤️ by the Shopez Team**

⭐ If you find this project helpful, please consider giving it a star on GitHub!

</div>
