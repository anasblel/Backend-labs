# Event Manager API (MVC Structure) - Lab 3

A robust Node.js backend application built with Express.js, demonstrating the **Model-View-Controller (MVC)** architectural pattern. This project provides a full CRUD (Create, Read, Update, Delete) API for managing events.

## 🚀 Features

- **Full CRUD API**: Manage events with standard HTTP methods.
- **MVC Architecture**: Clear separation of concerns between data (Models), logic (Controllers), and endpoints (Routes).
- **Custom Middleware**:
  - `logger`: Logs every incoming request.
  - `measureTime`: Tracks the response time of each request.
  - `validateEventInput`: Ensures data integrity for POST and PUT requests.
- **Health Check**: Endpoint to monitor the server status.
- **Developer Friendly**: Includes an automated test script and watch mode for development.

## 🛠️ Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js (v5)
- **Testing**: Built-in HTTP client testing script

## 📂 Project Structure

```text
LAB3/
├── src/
│   ├── models/       # Data handling and mock database logic
│   ├── controllers/  # Business logic for event management
│   ├── routes/       # API endpoint definitions
│   ├── utils/        # Utility helpers (e.g., standardized responses)
│   └── middleware.js # Custom middleware functions
├── server.js         # Entry point and server configuration
├── test-api.js       # Automated API testing script
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)

### Installation

1. Clone the project or navigate to the directory.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

**Development Mode (Auto-restart):**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The server will be available at `http://localhost:3000`.

## 📡 API Endpoints

### General
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | API Information & documentation summary |
| `GET` | `/health` | Server status and uptime |

### Events Resource
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/events` | Retrieve all events |
| `GET` | `/api/events/:id` | Retrieve a specific event by ID |
| `POST` | `/api/events` | Create a new event |
| `PUT` | `/api/events/:id` | Update an existing event |
| `DELETE` | `/api/events/:id` | Remove an event |

## 🧪 Testing

To run the automated API test suite, ensure the server is running and execute:

```bash
node test-api.js
```

This script will verify all CRUD operations, error handling, and 404 scenarios.

## 📝 License

This project is licensed under the MIT License - see the `package.json` file for details.
