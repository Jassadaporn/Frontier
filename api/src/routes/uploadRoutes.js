const express = require('express');
const multer = require('multer');
const { upload } = require('../controllers/uploadController');

const router = express.Router();
const uploadMiddleware = multer({ storage: multer.memoryStorage() });

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Upload a file to Firebase Storage
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 fileUrl:
 *                   type: string
 *       500:
 *         description: Internal server error
 */
router.post('/upload', uploadMiddleware.single('file'), upload);

module.exports = router;
