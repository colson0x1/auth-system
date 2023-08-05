# Auth System Server

Auth System Server is a rock-solid authentication server designed to handle user registration, login, and token-based authentication. This documentation provides an in-depth understanding of the application architecture and insights into the key components and features.

## Table of Contents

- [Auth System Server](#auth-system-server)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Application Structure](#application-structure)
  - [Authentication Strategy](#authentication-strategy)
  - [Routes](#routes)
  - [Models](#models)
  - [Controllers](#controllers)
  - [Passport Configuration](#passport-configuration)
  - [Database Setup](#database-setup)
  - [Environment Configuration](#environment-configuration)
  - [Screenshots](#screenshots)
    - [auth-system - jwt on successful sign up](#auth-system---jwt-on-successful-sign-up)
    - [auth-system - jwt on successful sign in](#auth-system---jwt-on-successful-sign-in)

## Introduction

Auth System Server is built using Node.js and Express to provide a secure and scalable authentication service. It uses MongoDB as the database for storing user information and JWT (JSON Web Tokens) for handling user authentication.

## Getting Started

To get started, follow these steps:

1. Clone the repository from GitHub: [auth-system](https://github.com/colson0x1/auth-system)

2. Navigate to the `server` directory of the repository.

3. Install the required dependencies by running `npm install` or `yarn install`.

4. **Setup Environment Configuration**:

   Create a `.env` file in the `server` directory and add the following environment variables:

   ```
   DATABASE_URL=mongodb://localhost/authDB
   ```
   

5. **Setup Configurations**:

   Open the `config.js` file in the `server` directory and ensure the following:

   ```
   // Holds application secrets and config
   module.exports = {
     secret: 'YourSecretKeyHere',
   };
   ```
   Replace `YourSecretKeyHere` with a strong secret key that will be used to sign and verify JWT tokens.

   The `config.js` file contains the secret key and should NOT be tracked by git.

6. Set up your MongoDB instance and create a database for the application.

7. Run the server in development mode using `npm run dev` or `yarn dev`.

8. The server will be running on `http://localhost:3009`.

## Dependencies

The Auth System Server relies on the following main dependencies:

- Express: A fast and minimalist web framework for Node.js.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- Passport: An authentication middleware for Node.js.
- JWT-Simple: A library to encode and decode JWT tokens.
- Bcrypt: A library for hashing passwords and comparing them securely.
- Morgan: A HTTP request logger middleware for Node.js.
- Dotenv: A module to load environment variables from a `.env` file.
- Nodemon: A development utility to monitor changes and automatically restart the server.

For a full list of dependencies, check the `package.json` file in the root directory.

## Application Structure

The Auth System Server follows a standard Node.js project structure. Here's a brief overview of the main directories:

```
|-- server
    |-- config.js
    |-- controllers
    |   |-- authentication.js
    |-- models
    |   |-- user.js
    |-- services
    |   |-- passport.js
    |-- .env
    |-- index.js
    |-- package.json
    |-- router.js
```

Explanation:

- `config.js`: Contains the application secrets and configurations, including the JWT secret key.

- `controllers`: Holds the controller functions responsible for handling authentication logic.

- `models`: Contains the MongoDB model schema for the user.

- `services`: Contains the Passport configuration for authentication strategies.

- `.env`: The environment configuration file to store sensitive data like database URL and JWT secret.

- `index.js`: The entry point of the application, setting up the server and routes.

- `package.json`: The npm package configuration file containing project details, dependencies, and scripts.

- `router.js`: The router module to handle incoming API requests and delegate them to the appropriate controller.

## Authentication Strategy

The server uses Passport middleware to handle authentication. It supports two strategies:

- `Local Strategy`: Handles user login with a username (email) and password. It compares the hashed password with the one stored in the database.

- `JWT Strategy`: Implements token-based authentication using JSON Web Tokens. It verifies the token and authorizes protected routes.

## Routes

The application has three main routes:

- `/`: A protected route that requires user authentication. When accessed, it responds with `{ hello: 'there' }`.

- `/signup`: The route for user registration. It creates a new user in the database.

- `/signin`: The route for user login. It generates a JWT token upon successful authentication.

## Models

The `user.js` model defines the user schema for MongoDB. It includes fields for `email` (unique and lowercase) and `password`.

The model also includes a pre-save hook that encrypts the password before saving it to the database using Bcrypt.

## Controllers

The `authentication.js` controller contains two functions:

- `signin`: Handles user login and returns a JWT token if the email and password match.

- `signup`: Handles user registration and creates a new user in the database with an encrypted password.

## Passport Configuration

The `passport.js` service sets up Passport authentication strategies. It defines the `Local Strategy` for login and the `JWT Strategy` for token-based authentication.

## Database Setup

The server uses MongoDB as the database. It connects to the database using Mongoose and loads the connection URL from the `.env` file.

## Environment Configuration

Sensitive data like the database URL and JWT secret are stored in the `.env` and `config.js` file. It is essential to keep this file secure and not share it in version control systems.

## Screenshots

### auth-system - jwt on successful sign up
![auth-system - jwt on successful sign up](https://i.imgur.com/8zWGJja.png)

### auth-system - jwt on successful sign in
![auth-system - jwt on successful sign in](https://i.imgur.com/KCpc6jx.png)