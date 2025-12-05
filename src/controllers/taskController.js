// src/controllers/taskController.js
const taskService = require('../services/taskService');

const createTask = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { title, description } = req.body;
        
        const task = await taskService.createTask(userId, title, description);
        
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: task
        });
    } catch (error) {
        next(error);
    }
};

const getTasks = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { completed, search } = req.query;
        
        const filters = {};
        if (completed !== undefined) filters.completed = completed;
        if (search) filters.search = search;
        
        const tasks = await taskService.getTasks(userId, filters);
        
        res.status(200).json({
            success: true,
            message: 'Tasks retrieved successfully',
            data: tasks
        });
    } catch (error) {
        next(error);
    }
};

const getTask = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { id } = req.params;
        
        const task = await taskService.getTaskById(userId, id);
        
        res.status(200).json({
            success: true,
            message: 'Task retrieved successfully',
            data: task
        });
    } catch (error) {
        next(error);
    }
};

const updateTask = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { id } = req.params;
        const updates = req.body;
        
        const task = await taskService.updateTask(userId, id, updates);
        
        res.status(200).json({
            success: true,
            message: 'Task updated successfully',
            data: task
        });
    } catch (error) {
        next(error);
    }
};

const deleteTask = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { id } = req.params;
        
        const result = await taskService.deleteTask(userId, id);
        
        res.status(200).json({
            success: true,
            message: result.message
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createTask,
    getTasks,
    getTask,
    updateTask,
    deleteTask
};
