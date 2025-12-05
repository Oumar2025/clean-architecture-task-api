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


## 🎥 Video Demonstration

Watch the complete project demonstration on YouTube:

[![Project Demo Video](https://drive.google.com/file/d/1rriAiMQxDrCYtkyNRuvlyxT2AlNV_YJv/view?usp=drivesdk)

**Click the image above to watch the video demonstration**

### What the video covers:
1. Backend API demonstration (endpoints, authentication)
2. Frontend Todo App walkthrough
3. Database interactions
4. Code structure explanation
5. Live testing of all features

### Quick timestamps:
- 0:00 - Introduction & project overview
- 1:30 - Backend API demonstration
- 3:45 - Frontend application walkthrough
- 5:20 - Database operations
- 7:00 - Code architecture explanation
- 9:15 - Live testing & Q&A

## 🎥 Video Demonstration

**Watch the complete project demonstration:** [Google Drive Video Link](https://drive.google.com/file/d/1rriAiMQxDrCYtkyNRuvlyxT2AlNV_YJv/view?usp=drivesdk)

[![Click to watch demonstration](https://img.shields.io/badge/Google_Drive-Watch_Video-blue?style=for-the-badge&logo=googledrive)](https://drive.google.com/file/d/1rriAiMQxDrCYtkyNRuvlyxT2AlNV_YJv/view?usp=drivesdk)

### Video Contents:
1. **0:00-2:00** - Project overview & architecture explanation
2. **2:00-4:30** - Backend API demonstration (endpoints, authentication)
3. **4:30-7:00** - Frontend Todo App walkthrough
4. **7:00-9:00** - Database operations & testing
5. **9:00-10:00** - Code structure & Clean Architecture explanation

### Features Demonstrated:
- ✅ User registration & login with JWT tokens
- ✅ Complete task CRUD operations
- ✅ Real-time frontend updates
- ✅ Error handling & validation
- ✅ Database migrations
- ✅ All three project comparisons

*Note: The video is hosted on Google Drive. Click the link above to watch.*
