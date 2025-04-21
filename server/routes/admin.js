import express from "express";
import { isAdmin, isAuth } from "../middlewares/isAuth.js";
import { addLecture, createCourse } from "../controllers/admin.js";
import { uploadFiles } from "../middlewares/multer.js";

const router = express.Router();

// Ensure all middleware and controllers are properly imported and exported
router.post("/course/new", isAuth, isAdmin, uploadFiles, createCourse);
router.post("/course/:id", isAuth, isAdmin, uploadFiles, addLecture);

export default router;
