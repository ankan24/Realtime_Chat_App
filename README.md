# MERN Stack Real-time Chat App 

This project is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.io. The application allows users to communicate in real-time, with features such as user authentication, message formatting, and responsive design.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with JWT
- Real-time messaging using Socket.io
- Responsive UI built with Tailwind CSS
- Image upload for user avatars
- Dynamic sidebar for user management
- Automatic scrolling to the latest messages

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - Socket.io

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Socket.io

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/ankan24/Realtime_Chat_App.git
   cd Realtime_Chat_App

2. Installation

For the Backend:
```bash
cd backend
npm install
```
For the Frontend:
```bash
cd frontend
npm install
```
3. Environment Variables

Create a .env file in the server directory and add the following:
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

## Usage
Start the Backend Server:
```bash
cd backend
npm run dev
```
Start the Frontend Application:
```bash
cd frontend
npm run dev
```
Open your browser and navigate to http://localhost:5173 to access the chat application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any bugs or feature requests.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

