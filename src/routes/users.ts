import express from 'express';
import { users, user, userCurrent } from '../controllers/users'
import { authenticateToken } from '../utils';

const router = express.Router();

router.get('/list', users);
router.get('/me', authenticateToken, userCurrent);
router.put('/me', authenticateToken, user);

export { router }
