const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const clientRoutes = require('./routes/clientRoutes');

const app = express();

// ใช้ CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // แทนที่ด้วย origin ของคุณ
  credentials: true // เพื่ออนุญาตการส่งคุกกี้
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api/users', userRoutes);
app.use('/api', uploadRoutes);
app.use('/api/client', clientRoutes);

const port = process.env.PORT || 3000;

// ตั้งค่า Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'User API Documentation',
    },
  },
  apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API Documentation available at http://localhost:${port}/api-docs`);
});
