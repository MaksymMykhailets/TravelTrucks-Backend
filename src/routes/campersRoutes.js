import { Router } from 'express';
import {
  getCampersController,
  getCamperByIdController,
} from '../controllers/campersController.js';

const router = Router();

router.get('/', getCampersController);
router.get('/:id', getCamperByIdController);

export default router;
