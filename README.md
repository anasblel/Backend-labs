# Event Management System - Lab 2

A Node.js laboratory project focusing on modular architecture, custom validators, and utility helpers. This project demonstrates how to organize logic into separate modules for better maintainability and scalability.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone or download this repository.
2. Navigate to the project directory:
   ```bash
   cd LAB2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## 🛠 Project Structure

```text
LAB2/
├── config/
│   ├── constants.js      # Global configuration and magic numbers
│   └── environment.js    # Environment variable management
├── utils/
│   ├── helpers.js        # Formatting and status logic
│   └── validators.js      # Input validation logic (events, emails)
├── Lab2_UsingModules.js  # Main lab script demonstrating module usage
├── server.js             # Application entry point
├── .env                  # Environment configuration (template)
└── package.json          # Project metadata and scripts
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the main application entry point (`server.js`). This script initializes the environment and logs core application settings.

### `npm run lab2`
Runs the Lab 2 demonstration script (`Lab2_UsingModules.js`). This executes a series of tests to verify the functionality of the custom modules in `utils/`.

### `npm test`
Runs the native Node.js test runner for any test files in the project.

## ⚙️ Configuration

The project uses `dotenv` for environment variables. Ensure you have a `.env` file in the root with the following variables:

```env
APP_NAME=Event Manager
PORT=3000
NODE_ENV=development
```

## 🧪 Testing Modules

To see the modules in action, run:
```bash
npm run lab2
```
This will test:
- Event object validation (title, date, capacity)
- Email format validation
- Date formatting utilities
- Event status calculation (Past vs. Upcoming)

---
*Developed as part of the Node.js learning series.*
