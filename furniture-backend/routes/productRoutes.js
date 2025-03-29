import express from 'express';
import {
  createProduct,
  deleteProduct,
  getProducts,
  getProductById,
  updateProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes (anyone can view products)
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin-only routes (protected)
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;
