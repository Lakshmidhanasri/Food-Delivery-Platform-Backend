# Food-Delivery-Platform-Backend
Install dependencies: Ensure you have Node.js and MongoDB installed.
npm 

# Running the Application
npm start
The server will start at http://localhost:3000.


API Endpoints
# User Management
Register User
POST /api/users/register
Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

# Login User
POST /api/users/login
Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Get Profile (Requires JWT)
GET /api/users/profile

# Update Profile (Requires JWT)
PUT /api/users/profile


# Restaurant Management
# Create a Restaurant
POST /api/restaurants
Body:
{
  "name": "Pizza Place",
  "location": "New York"
}

# Update Restaurant
PUT /api/restaurants/:restaurantId
Body:
{
  "name": "Updated Pizza Place",
  "location": "Los Angeles"
}

# Add Menu Item
POST /api/restaurants/:restaurantId/menu
Body:
{
  "name": "Pepperoni Pizza",
  "description": "Delicious pepperoni pizza",
  "price": 12.99
}

# Update Menu Item
PUT /api/restaurants/:restaurantId/menu/:itemId
Body:
{
  "name": "Veggie Pizza",
  "price": 11.99
}

 # Order Management
Place an Order
POST /api/orders
Body:
{
  "restaurantId": "RESTAURANT_ID",
  "items": [
    { "name": "Pepperoni Pizza", "quantity": 1 }
  ],
  "deliveryAddress": "123 Main St"
}

# Get Order Details
GET /api/orders/:orderId

Update Order Status (For admins only)
PUT /api/orders/:orderId/status
Body:
{
  "status": "Delivered"
}
# Track an Order
GET /api/orders/:orderId/track

Real-Time Order Tracking
Connect to the WebSocket server to receive real-time order updates like "In Progress," "Out for Delivery," or "Delivered."

# Authentication
All endpoints that require authentication (e.g., updating profile, placing orders) must include a JWT token in the Authorization header.
Example:
Authorization: Bearer <your_jwt_token>

Real-Time Features
This project uses WebSockets (via socket.io) to provide real-time order tracking. After placing an order, users can receive real-time updates about their order status.


# Setup Instructions
Install the dependencies using npm install
Configure the environment variables in the .env file
Start the server using npm start
Test the APIs using Postman or any other API testing tool
