// src/controllers/userController.js
const userService = require('../services/userService');
const { generateToken } = require('../middlewares/authMiddleware');

const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        
        const user = await userService.register(name, email, password);
        const token = generateToken(user.id);
        
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                user,
                token
            }
        });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await userService.login(email, password);
        const token = generateToken(user.id);
        
        res.status(200).json({
            success: true,
            message: 'Login successful',
            data: {
                user,
                token
            }
        });
    } catch (error) {
        next(error);
    }
};

const getProfile = async (req, res, next) => {
    try {
        const userId = req.userId;
        
        const user = await userService.getUserProfile(userId);
        
        res.status(200).json({
            success: true,
            message: 'Profile retrieved successfully',
            data: user
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    getProfile
};
