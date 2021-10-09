import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.get('/', userController.getAlluser);

export default router;
