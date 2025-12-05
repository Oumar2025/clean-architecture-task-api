# 🏗️ Clean Architecture Task API

A professional Task Management API built with Clean Architecture principles, featuring Express.js, Prisma ORM, SQLite database, and JWT authentication.

![API Status](https://img.shields.io/badge/status-operational-brightgreen)
![Node.js](https://img.shields.io/badge/node.js-18.x-green)
![Express.js](https://img.shields.io/badge/express.js-4.x-blue)
![Prisma](https://img.shields.io/badge/prisma-5.x-orange)

## 🚀 Features

- ✅ **Clean Architecture** - Proper separation of concerns
- ✅ **JWT Authentication** - Secure user authentication
- ✅ **Task Management** - Full CRUD operations
- ✅ **Input Validation** - Robust validation layer
- ✅ **Error Handling** - Consistent error responses
- ✅ **SQLite Database** - Lightweight & file-based
- ✅ **API Documentation** - Interactive welcome page
- ✅ **Environment Configuration** - Easy deployment

## 📁 Project Structure
clean-architecture-task-api/
├── src/
│ ├── controllers/ # HTTP request/response handlers
│ │ ├── userController.js
│ │ └── taskController.js
│ ├── services/ # Business logic layer
│ │ ├── userService.js
│ │ └── taskService.js
│ ├── routes/ # API route definitions
│ │ ├── userRoutes.js
│ │ └── taskRoutes.js
│ ├── middlewares/ # Cross-cutting concerns
│ │ ├── authMiddleware.js
│ │ └── errorHandler.js
│ └── utils/ # Shared utilities
│ ├── prisma.js
│ ├── errors.js
│ └── validators.js
├── prisma/ # Database schema & migrations
│ └── schema.prisma
├── public/ # Static files (welcome page)
│ └── index.html
├── server.js # Application entry point
├── package.json # Dependencies
└── .env.example # Environment template

