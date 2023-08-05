# Auth System

Auth System is a robust and secure authentication application designed for seamless integration into web projects. It comprises a client-side and server-side component to provide efficient user authentication and authorization functionalities. This documentation provides an in-depth overview of the architecture, setup, and key features of the Auth System.

![auth-system](https://i.imgur.com/yzYx7LI.png)

## Table of Contents

- [Auth System](#auth-system)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Architecture](#architecture)
  - [Getting Started](#getting-started)
  - [Client](#client)
  - [Server](#server)
  - [Dependencies](#dependencies)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
    - [auth-system](#auth-system-1)
    - [auth-system - sign up](#auth-system---sign-up)
    - [auth-system - sign up error](#auth-system---sign-up-error)
    - [auth-system - redirected to protected feature page after sign up](#auth-system---redirected-to-protected-feature-page-after-sign-up)
    - [auth-system - sign out](#auth-system---sign-out)
    - [auth-system - sign in error](#auth-system---sign-in-error)
    - [auth-system - successful sign in](#auth-system---successful-sign-in)
    - [auth-system - redirects to home when tried to access protected routes without signing in](#auth-system---redirects-to-home-when-tried-to-access-protected-routes-without-signing-in)
    - [auth-system - jwt on successful sign up](#auth-system---jwt-on-successful-sign-up)
    - [auth-system - jwt on successful sign in](#auth-system---jwt-on-successful-sign-in)

## Introduction

Auth System is built to address the crucial need for secure user authentication in web applications. It offers a scalable solution that seamlessly integrates into various projects, ensuring users' privacy and data security.

## Features

- User Registration: Allows users to create an account with a unique email and password combination.
- User Login: Provides a secure login process for registered users using email and password.
- Token-Based Authentication: Implements JWT (JSON Web Tokens) for secure token-based authentication.
- Protected Routes: Authorizes access to specific routes using JWT authentication tokens.
- Secure Data Storage: Safely stores user information in MongoDB using strong encryption.

## Architecture

The Auth System follows a client-server architecture:

- Client: Built with React, Redux, and essential libraries, it provides the user interface and interactions for authentication.

- Server: Powered by Node.js, Express, and MongoDB, it handles authentication requests, securely stores user data, and issues JWT tokens.

## Getting Started

To get started with Auth System, follow these steps:

1. Clone the `auth-system` repository from GitHub: [auth-system](https://github.com/colson0x1/auth-system).

2. Navigate to the `client` and `server` directories and follow their respective READMEs for setup and installation instructions.

3. Run the client and server applications concurrently to enable full authentication functionality.

## Client

The `client` directory contains the front-end of the Auth System application. It offers an intuitive user interface for user registration, login, and access to protected features. The client communicates with the server through API calls to manage authentication.

## Server

The `server` directory contains the back-end of the Auth System application. It handles user authentication requests, securely stores user data in MongoDB, and issues JWT tokens for secure token-based authentication.

## Dependencies

Both the client and server have their respective dependencies listed in the `package.json` files within their directories. Ensure you have Node.js and npm (Node Package Manager) installed on your system.

## Usage

Auth System can be seamlessly integrated into any web application that requires user authentication. The client-side components can be customized and styled to fit the overall design of the target application. The server-side API endpoints can be consumed by any client application to implement secure user authentication.

## Screenshots

### auth-system
![auth-system](https://i.imgur.com/yzYx7LI.png)

### auth-system - sign up
![auth-system - sign up](https://i.imgur.com/ExFuOyJ.png)

### auth-system - sign up error
![auth-system - sign up error](https://i.imgur.com/YOMkbSY.png)

### auth-system - redirected to protected feature page after sign up
![auth-system - redirected to protected feature page after sign up](https://i.imgur.com/LFLzXtj.png)

### auth-system - sign out
![auth-system - sign out](https://i.imgur.com/J9C2SXE.png)

### auth-system - sign in error
![auth-system - sign in error](https://i.imgur.com/dhYrgFl.png)

### auth-system - successful sign in
![auth-system - successful sign in](https://i.imgur.com/AssGabp.png)

### auth-system - redirects to home when tried to access protected routes without signing in
![auth-system - redirects to home when tried to access protected routes without signing in](https://i.imgur.com/IfhbVCw.png)

### auth-system - jwt on successful sign up
![auth-system - jwt on successful sign up](https://i.imgur.com/8zWGJja.png)

### auth-system - jwt on successful sign in
![auth-system - jwt on successful sign in](https://i.imgur.com/KCpc6jx.png)