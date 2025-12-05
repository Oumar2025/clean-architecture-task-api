// src/services/taskService.js
const prisma = require('../utils/prisma');
const { validateTaskInput } = require('../utils/validators');
const { BadRequestError, NotFoundError, UnauthorizedError } = require('../utils/errors');

const createTask = async (userId, title, description) => {
    validateTaskInput(title, description);
    
    const task = await prisma.task.create({
        data: {
            title,
            description,
            userId
        },
        select: {
            id: true,
            title: true,
            description: true,
            completed: true,
            createdAt: true,
            updatedAt: true
        }
    });
    
    return task;
};

const getTasks = async (userId, filters = {}) => {
    const { completed, search } = filters;
    
    const where = { userId };
    
    if (completed !== undefined) {
        where.completed = completed === 'true';
    }
    
    if (search) {
        where.OR = [
            { title: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } }
        ];
    }
    
    const tasks = await prisma.task.findMany({
        where,
        select: {
            id: true,
            title: true,
            description: true,
            completed: true,
            createdAt: true,
            updatedAt: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    
    return tasks;
};

const getTaskById = async (userId, taskId) => {
    const task = await prisma.task.findUnique({
        where: { id: taskId }
    });
    
    if (!task) {
        throw new NotFoundError('Task not found');
    }
    
    if (task.userId !== userId) {
        throw new UnauthorizedError('Not authorized to access this task');
    }
    
    return {
        id: task.id,
        title: task.title,
        description: task.description,
        completed: task.completed,
        createdAt: task.createdAt,
        updatedAt: task.updatedAt
    };
};

const updateTask = async (userId, taskId, updates) => {
    const { title, description, completed } = updates;
    
    // Check if task exists and belongs to user
    const existingTask = await prisma.task.findUnique({
        where: { id: taskId }
    });
    
    if (!existingTask) {
        throw new NotFoundError('Task not found');
    }
    
    if (existingTask.userId !== userId) {
        throw new UnauthorizedError('Not authorized to update this task');
    }
    
    // Validate input if provided
    if (title !== undefined) {
        validateTaskInput(title, description || existingTask.description);
    }
    
    const task = await prisma.task.update({
        where: { id: taskId },
        data: {
            title: title !== undefined ? title : existingTask.title,
            description: description !== undefined ? description : existingTask.description,
            completed: completed !== undefined ? completed : existingTask.completed
        },
        select: {
            id: true,
            title: true,
            description: true,
            completed: true,
            createdAt: true,
            updatedAt: true
        }
    });
    
    return task;
};

const deleteTask = async (userId, taskId) => {
    // Check if task exists and belongs to user
    const task = await prisma.task.findUnique({
        where: { id: taskId }
    });
    
    if (!task) {
        throw new NotFoundError('Task not found');
    }
    
    if (task.userId !== userId) {
        throw new UnauthorizedError('Not authorized to delete this task');
    }
    
    await prisma.task.delete({
        where: { id: taskId }
    });
    
    return { message: 'Task deleted successfully' };
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};
