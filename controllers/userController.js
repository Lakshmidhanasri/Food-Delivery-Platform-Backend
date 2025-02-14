const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const user = await User.create({ name, email, password });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(201).json({ token });
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.json({ token });
};

// Get user profile
exports.getProfile = async (req, res) => {
  res.json(req.user);
};

// Update user profile
exports.updateProfile = async (req, res) => {
  const { name, email, addresses } = req.body;
  const user = await User.findByIdAndUpdate(
    req.user._id,
    { name, email, addresses },
    { new: true }
  );
  res.json(user);
};
