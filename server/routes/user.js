import express, { Router } from "express";
import { register, verifyUser } from "../controllers/user.js";

const router = express.Router();

router.post("/user/register", register);
router.post("/user/verify", verifyUser);

export default router;
