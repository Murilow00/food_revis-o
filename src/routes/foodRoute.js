import express from 'express';
import * as controller from '../controllers/foodController.js';

const router = express.Router();

router.post('/food', controller.create);
router.get('/food', controller.getAll);
router.get('/food/:id', controller.getById);
router.put('/food/:id', controller.update);
router.delete('/food/:id', controller.remove);

export default router;
