import express from 'express';
import { createReview } from "../controllers/review.controller.js";
import { isLogin } from '../auth.middleware.js';

const router = express.Router();
router.post("/",isLogin,createReview);

export default router;