import express from 'express';
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.send('Enquiry API is working!');
});

export default router;
