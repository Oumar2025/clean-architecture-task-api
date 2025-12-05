// src/utils/validators.js
const validator = require('validator');
const { BadRequestError } = require('./errors');

const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
        throw new BadRequestError('Invalid email format');
    }
};

const validatePassword = (password) => {
    if (!password || password.length < 6) {
        throw new BadRequestError('Password must be at least 6 characters long');
    }
};

const validateTaskInput = (title, description) => {
    if (!title || title.trim().length === 0) {
        throw new BadRequestError('Task title is required');
    }
    
    if (title.length > 100) {
        throw new BadRequestError('Task title cannot exceed 100 characters');
    }
    
    if (description && description.length > 500) {
        throw new BadRequestError('Description cannot exceed 500 characters');
    }
};

module.exports = {
    validateEmail,
    validatePassword,
    validateTaskInput
};
