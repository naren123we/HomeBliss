const express = require("express");
const router = express.Router();
const {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFav,
  toFav,
  login,
} = require("../controllers/userController");
const { auth } = require("../middleware/auth");
const {
  forgotpass,
  resetpassword,
  resetPass,
} = require("../controllers/forgotPass");
router.post("/register", createUser);
router.post("/login", login);
router.post("/bookvisit/:id", auth, bookVisit);
router.post("/allBookings", auth, getAllBookings);
router.post("/removeBooking/:id", auth, cancelBooking);
router.post("/toFav/:rid", auth, toFav);
router.post("/allFav", auth, getAllFav);
router.post("/forgot-password", forgotpass);
router.get("/reset-password/:id/:token", resetpassword);
router.post("/reset-password/:id/:token", resetPass);

module.exports = router;
