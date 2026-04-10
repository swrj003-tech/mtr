import express from 'express';
import prisma from '../db.js';

const router = express.Router();

// GET /api/reviews/:productId
router.get('/:productId', async (req, res) => {
  const { productId } = req.params;
  const id = parseInt(productId);
  if (isNaN(id)) return res.status(400).json({ error: 'Invalid product ID' });
  
  try {
    const reviews = await prisma.review.findMany({
      where: { productId: id },
      orderBy: { createdAt: 'desc' },
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// POST /api/reviews
router.post('/', async (req, res) => {
  const { productId, userName, rating, comment } = req.body;
  
  if (!productId || !userName || !rating || !comment) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const pId = parseInt(productId);
    if (isNaN(pId)) return res.status(400).json({ error: 'Invalid product ID' });

    const review = await prisma.review.create({
      data: {
        productId: pId,
        userName,
        rating: parseInt(rating),
        comment,
        isVerified: false, 
      },
    });

    // Update product review count/rating cache
    const allReviews = await prisma.review.findMany({ where: { productId } });
    const avgRating = allReviews.reduce((acc, r) => acc + r.rating, 0) / allReviews.length;
    
    await prisma.product.update({
      where: { id: pId },
      data: {
        reviewCount: allReviews.length,
        ratingValue: avgRating,
        rating: `${avgRating.toFixed(1)}/5 Recommended`
      }
    });

    res.status(201).json(review);
  } catch (err) {
    console.error('Review Create Error:', err);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

export default router;
