const express = require("express");
const {
  createOrder,
  getOrder,
  getUserOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/:orderId", protect, getOrder);
router.get("/", protect, getUserOrders);
router.put("/:orderId/status", protect, updateOrderStatus);

module.exports = router;
