import { Router } from "express";
import {
  forgotPassword,
  login,
  logout,
  resetPassword,
  signup,
  verifyEmail,
} from "../Controllers/authController.js";
const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
