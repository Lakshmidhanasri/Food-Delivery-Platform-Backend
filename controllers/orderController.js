const Order = require("../models/Order");

// Create a new order
exports.createOrder = async (req, res) => {
  const { restaurantId, items, deliveryAddress } = req.body;
  const totalCost = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const order = await Order.create({
    user: req.user._id,
    restaurant: restaurantId,
    items,
    totalCost,
    deliveryAddress,
  });
  res.status(201).json(order);
};

// Get order details
exports.getOrder = async (req, res) => {
  const order = await Order.findById(req.params.orderId).populate(
    "user restaurant"
  );
  res.json(order);
};

// List orders for the logged in user
exports.getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate(
    "restaurant"
  );
  res.json(orders);
};

// Update order status
exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.orderId,
    { status: req.body.status },
    { new: true }
  );
  res.json(order);
};
