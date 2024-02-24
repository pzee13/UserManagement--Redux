import express from 'express';
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userController.js';
import asyncHandler from 'express-async-handler';

const router = express.Router();

router.post('/', asyncHandler(registerUser));
router.post('/auth', asyncHandler(authUser));
router.post('/logout', asyncHandler(logoutUser));
router.route('/profile').get(asyncHandler(getUserProfile)).put(asyncHandler(updateUserProfile));

export default router;
