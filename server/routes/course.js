import express from 'express';
import { getAllCourses, getSingleCourse } from '../controllers/course.js';

const router = express.Router();

router.get("/course/all", getAllCourses);
router.get("/course/:id", getSingleCourse);

export default router;