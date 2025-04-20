import express, { Router } from "express";
import { register } from "../controllers/user.js";

const router = express.Router();

router.post('/user/register', register);

export default router;