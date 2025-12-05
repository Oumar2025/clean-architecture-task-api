// src/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const { UnauthorizedError } = require('../utils/errors');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const generateToken = (userId) => {
    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        throw new UnauthorizedError('Invalid token');
    }
};

const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedError('No token provided');
        }

        const token = authHeader.split(' ')[1];
        const decoded = verifyToken(token);

        req.userId = decoded.userId;
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    generateToken,
    authenticate
};

