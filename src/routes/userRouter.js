import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.post('/signup/id', userController.checkUserName);
router.post('/signup', userController.clickButtonCheckSignup);
router.get('/', userController.getAlluser);

export default router;
