import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import enquiryRoutes from './routes/enquiryRoutes.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import cors from 'cors';

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(cors()); // Enable CORS before routes
app.use(express.json()); // Middleware to parse JSON bodies

// API Routes
app.use('/api/enquiries', enquiryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Custom Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
