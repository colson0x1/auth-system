# Auth System Client

Auth System Client is the front-end part of the authentication system application, responsible for handling user interfaces and interactions. This documentation provides an overview of the application architecture and how to set up and use the Auth System Client.

## Table of Contents

- [Auth System Client](#auth-system-client)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Getting Started](#getting-started)
  - [Dependencies](#dependencies)
  - [Application Structure](#application-structure)
  - [Authentication](#authentication)
  - [Routes](#routes)
  - [Actions](#actions)
  - [Reducers](#reducers)
  - [CSS Styling](#css-styling)
  - [Screenshots](#screenshots)
    - [auth-system](#auth-system)
    - [auth-system - sign up](#auth-system---sign-up)
    - [auth-system - sign up error](#auth-system---sign-up-error)
    - [auth-system - redirected to protected feature page after sign up](#auth-system---redirected-to-protected-feature-page-after-sign-up)
    - [auth-system - sign out](#auth-system---sign-out)
    - [auth-system - sign in error](#auth-system---sign-in-error)
    - [auth-system - successful sign in](#auth-system---successful-sign-in)
    - [auth-system - redirects to home when tried to access protected routes without signing in](#auth-system---redirects-to-home-when-tried-to-access-protected-routes-without-signing-in)

## Introduction

Auth System Client is a React-based web application designed to interact with the Auth System server to provide user authentication features. The application uses React, Redux, and Redux-Form for state management, form handling, and routing with React Router.

## Getting Started

To get started, follow these steps:

1. Clone the repository from GitHub: [auth-system](https://github.com/colson0x1/auth-system)

2. Navigate to the `client` directory of the repository.

3. Install the required dependencies by running `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

4. Run the development server with `npm start` or `yarn start`.

5. Open your browser and access the application at `http://localhost:3000`.

## Dependencies

The Auth System Client has the following main dependencies:

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- Redux: A predictable state container for managing application state.
- Redux-Form: A form library for managing form state in Redux.
- Axios: A popular HTTP client for making API requests.

For a full list of dependencies, check the `package.json` file in the root directory.

## Application Structure

The Auth System Client follows a standard React project structure. Here's a brief overview of the main directories:

- `src`: Contains all the source code for the application.
  - `actions`: Holds Redux action creators for handling user authentication and errors.
  - `components`: Contains various React components used to build the user interface.
  - `reducers`: Holds the Redux reducers to manage the application state.
  - `styles`: Contains CSS and styling files for the application.

## Authentication

The authentication system in this client application relies on JSON Web Tokens (JWTs). When a user signs up or signs in successfully, the server responds with a JWT token, which is then stored in the application's local storage. The token is used to authenticate subsequent requests to the server.

## Routes

The application has the following routes:

- `/`: The home route, displaying a welcome message and options to sign up or sign in.
- `/signup`: The route for user registration.
- `/signin`: The route for user login.
- `/feature`: A protected route accessible only to authenticated users.
- `/signout`: The route for user logout.

## Actions

The `actions` directory contains Redux action creators for user authentication. The main actions are:

- `signup`: Action to handle user registration. It sends a POST request to the server with user credentials.
- `signin`: Action to handle user login. It sends a POST request to the server with user credentials.
- `signout`: Action to handle user logout. It removes the authentication token from local storage.

## Reducers

The `reducers` directory contains the Redux reducers. The main reducer, `auth.js`, manages the authentication state of the application. It handles the `AUTH_USER` action when a user successfully signs up or signs in and updates the authenticated state accordingly. It also handles the `AUTH_ERROR` action when authentication fails and updates the error message state.

## CSS Styling

CSS styling for the application is managed in separate files, mainly in the `HeaderStyle.css` file. The styling is minimal and ensures a clean and responsive design for the application.

---

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