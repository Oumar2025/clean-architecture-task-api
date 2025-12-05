// src/services/userService.js
const prisma = require('../utils/prisma');
const bcrypt = require('bcryptjs');
const { validateEmail, validatePassword } = require('../utils/validators');
const { BadRequestError, NotFoundError, ConflictError } = require('../utils/errors');

const register = async (name, email, password) => {
    // Validate input
    if (!name || !email || !password) {
        throw new BadRequestError('All fields are required');
    }
    
    validateEmail(email);
    validatePassword(password);
    
    // Check if user exists
    const existingUser = await prisma.user.findUnique({
        where: { email }
    });
    
    if (existingUser) {
        throw new ConflictError('Email already registered');
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
        }
    });
    
    return user;
};

const login = async (email, password) => {
    if (!email || !password) {
        throw new BadRequestError('Email and password are required');
    }
    
    // Find user
    const user = await prisma.user.findUnique({
        where: { email }
    });
    
    if (!user) {
        throw new NotFoundError('User not found');
    }
    
    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
        throw new BadRequestError('Invalid password');
    }

    // Return user without password
    return {
        id: user.id,
        name: user.name,
        email: user.email
    };
};

const getUserProfile = async (userId) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true
        }
    });
    
    if (!user) {
        throw new NotFoundError('User not found');
    }
    
    return user;
};

module.exports = {
    register,
    login,
    getUserProfile
};
