import express from 'express';
import { registerUser, authUser, forgotPassword } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser); // /api/users/register
router.post('/login', authUser);         // /api/users/login
router.post('/forgot-password', forgotPassword); // /api/users/forgot-password

export default router;
