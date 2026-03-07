# Shopez E-commerce Website

Shopez is a full-stack e-commerce project with three apps in a single repository:
- `frontend/`: customer storefront
- `backend/`: API server and business logic
- `admin/`: admin panel (currently in setup phase)

## Current Status (March 2026)

### Backend (`backend/`)
- Express server is running with MongoDB and Cloudinary configuration.
- Core modules are added for users, products, cart, and orders.
- JWT-based authentication is implemented for user and admin flows.
- Product upload flow uses Multer + Cloudinary.
- COD order placement is implemented.
- Stripe and Razorpay order handlers are scaffolded and pending implementation.

### Storefront (`frontend/`)
- React + Vite app structure is in place.
- Route-based pages and reusable UI components are present.
- Core shopping UI flows are available (collection, product, cart, checkout pages).

### Admin (`admin/`) - In Progress
- Admin project has been initialized with React + Vite.
- Initial dependencies are configured (`axios`, `react-router-dom`, `react-toastify`).
- Dashboard features are planned and tracked in the roadmap below.

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

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT + bcrypt
- Cloudinary + Multer
- Stripe + Razorpay (integration in progress)

### Frontend and Admin
- React 19
- Vite
- React Router DOM
- Axios
- React Toastify
- ESLint

## Local Setup

### Prerequisites
- Node.js 20+
- npm
- MongoDB instance (Atlas or local)
- Cloudinary account

### 1. Install Dependencies

```bash
cd backend
npm install

cd ../frontend
npm install

cd ../admin
npm install
```

### 2. Configure Environment

Create `backend/.env` from `backend/.env.example` and fill real values.

### 3. Run Applications

```bash
# terminal 1
cd backend
npm run server

# terminal 2
cd frontend
npm run dev

# terminal 3
cd admin
npm run dev
```

## Scripts

### Backend
- `npm start`: run backend with Node
- `npm run server`: run backend with nodemon

### Frontend
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

### Admin
- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run preview`

## Upcoming Admin Work

1. Implement admin authentication flow.
2. Build product management UI (add, list, delete, update).
3. Build order management UI (status update, list filters).
4. Integrate dashboard analytics (sales summary, order metrics).
5. Connect all admin pages to backend APIs with consistent error handling.

## Important Notes

- Use `http://localhost:4000` for backend requests (not `https://localhost:4000`).
- Backend development script is `npm run server`.
- Do not commit secrets; keep real credentials only in local `backend/.env`.

## Author

Piyush Mishra , Pranav Chinthala , Diksha Jadhav, Pranav Nagur

