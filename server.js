// server.js - Main application file
require('dotenv').config();
const express = require('express');
const cors = require('cors');  // <-- ADD THIS LINE
const userRoutes = require('./src/routes/userRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

// Add this after line 20 in server.js (after app.use(express.json());)

// Welcome API route
app.get('/api', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to Clean Architecture Task API',
        version: '1.0.0',
        documentation: {
            baseUrl: 'http://localhost:4000',
            endpoints: {
                health: 'GET /health',
                apiInfo: 'GET /api',
                register: 'POST /api/users/register',
                login: 'POST /api/users/login',
                profile: 'GET /api/users/profile',
                tasks: {
                    create: 'POST /api/tasks',
                    getAll: 'GET /api/tasks',
                    getOne: 'GET /api/tasks/:id',
                    update: 'PUT /api/tasks/:id',
                    delete: 'DELETE /api/tasks/:id'
                }
            },
            authentication: 'Protected routes require: Authorization: Bearer <token>'
        }
    });
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        error: {
            name: 'NotFoundError',
            message: 'Route not found'
        }
    });
});

// Error handler (must be last)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📝 API Documentation:`);
    console.log(`   Health Check: GET http://localhost:${PORT}/health`);
    console.log(`   User Register: POST http://localhost:${PORT}/api/users/register`);
    console.log(`   User Login: POST http://localhost:${PORT}/api/users/login`);
    console.log(`   Get Profile: GET http://localhost:${PORT}/api/users/profile`);
    console.log(`   Create Task: POST http://localhost:${PORT}/api/tasks`);
    console.log(`   Get Tasks: GET http://localhost:${PORT}/api/tasks`);
});
