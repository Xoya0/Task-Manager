# Task Manager

A simple and efficient task management application that allows users to create, manage, and track their tasks. This application is built using React and Firebase.

## Features

- User authentication (login and registration)
- Create, update, and delete tasks
- Mark tasks as completed
- Filter and sort tasks
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend**: [React](https://reactjs.org/)
- **Backend**: [Firebase](https://firebase.google.com/) (for database and authentication)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) and custom CSS

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Xoya0/Task-Manager.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Task-Manager
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your Firebase configuration variables. Example:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. Start the application:
   ```bash
   npm start
   ```

## Usage

- Visit `http://localhost:3000` (or the port specified in your setup) in your browser to access the application.
- Register a new account or log in with an existing account.
- Start creating and managing your tasks!

