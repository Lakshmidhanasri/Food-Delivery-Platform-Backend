const Restaurant = require("../models/Restaurant");

// Create a new restaurant
exports.createRestaurant = async (req, res) => {
  const restaurant = await Restaurant.create(req.body);
  res.status(201).json(restaurant);
};

// Update restaurant details
exports.updateRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findByIdAndUpdate(
    req.params.restaurantId,
    req.body,
    { new: true }
  );
  res.json(restaurant);
};

// Add menu item
exports.addMenuItem = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.restaurantId);
  restaurant.menu.push(req.body);
  await restaurant.save();
  res.json(restaurant);
};

// Update menu item
exports.updateMenuItem = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.restaurantId);
  const item = restaurant.menu.id(req.params.itemId);
  item.set(req.body);
  await restaurant.save();
  res.json(item);
};
