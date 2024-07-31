# Backend Project

## Description

This is a backend application developed using NestJS and TypeORM, which provides CRUD operations for managing items (books). The application uses PostgreSQL for data storage.

## Requirements

- Node.js (v14 and above)
- npm (v6 and above) or yarn
- PostgreSQL

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sonya456/backend-project.git
   cd backend-project

2. Install dependencies:
   npm install
   or 
   yarn install

3. Create a PostgreSQL database and configure connection settings in ormconfig.json:
   {
     "type": "postgres",
     "host": "localhost",
     "port": 5432,
     "username": "your-username",
     "password": "your-password",
     "database": "your-database",
     "entities": ["dist/**/*.entity{.ts,.js}"],
     "synchronize": true
   }
Running the Application
1. Start the PostgreSQL database server.

2. Start the application:
    npm run start
        or
    yarn start

The application will be available at http://localhost:3001.

API Endpoints

GET /items - Retrieve all books

GET /items/:id - Retrieve a book by ID

POST /items - Add a new book

PUT /items/:id - Update a book by ID

DELETE /items/:id - Delete a book by ID
