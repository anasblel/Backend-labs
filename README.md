# Event Manager API (REST API Design & CRUD Mastery) - Lab 4

A professional Node.js backend application demonstrating advanced **REST API design principles** and complete **CRUD (Create, Read, Update, Delete) operations**. This lab builds upon the MVC architecture from Lab 3, focusing on RESTful conventions, API versioning, comprehensive validation, pagination, filtering, and automated testing.

## 🎯 Lab Objectives

This lab focuses on mastering REST API design by implementing:
- **RESTful Resource Design**: Proper HTTP methods, status codes, and resource naming
- **API Versioning**: Versioned endpoints for future compatibility
- **Advanced CRUD Operations**: Complete lifecycle management with validation
- **Filtering & Pagination**: Efficient data retrieval with query parameters
- **Comprehensive Validation**: Input validation and error handling
- **Standardized Responses**: Consistent API response format
- **API Documentation**: Swagger/OpenAPI integration
- **Automated Testing**: Comprehensive test suite for all endpoints

## 🚀 Features

- **Full RESTful CRUD API**: Complete event management with proper HTTP semantics
- **API Versioning**: `/api/v1/` prefix for version control
- **Advanced Filtering**: Filter by status, location, search terms, and capacity
- **Pagination Support**: Efficient handling of large datasets
- **Comprehensive Validation**: Server-side validation with detailed error messages
- **Statistics Endpoint**: Analytics and insights for events
- **Swagger Documentation**: Interactive API documentation at `/api-docs`
- **Standardized Responses**: Consistent JSON response structure
- **Error Handling**: Proper HTTP status codes and error responses
- **Automated Testing**: Complete test suite covering all scenarios

## 🛠️ Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Express.js (v5)
- **Documentation**: Swagger/OpenAPI (swagger-jsdoc, swagger-ui-express)
- **Testing**: Built-in HTTP client testing with fetch API

## 📂 Project Structure

```
LAB4/
├── src/
│   ├── constants/       # API constants and configuration
│   ├── controllers/     # Business logic for CRUD operations
│   ├── models/          # Data models with filtering & pagination
│   ├── routes/          # RESTful API endpoint definitions
│   ├── services/        # Validation and business services
│   ├── utils/           # Response utilities and helpers
│   ├── middleware.js    # Custom middleware (logger, timing)
│   └── swagger.js       # API documentation configuration
├── server.js            # Main server with API versioning
├── test-rest-api.js     # Comprehensive REST API test suite
├── package.json         # Dependencies and scripts
└── README.md            # This documentation
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

## 📚 Step-by-Step Lab Implementation

### Step 1: Project Setup & API Versioning
- Updated `server.js` to include API versioning (`/api/v1/`)
- Added Swagger documentation integration
- Configured middleware for JSON parsing, logging, and timing

### Step 2: RESTful Route Design
- Created `eventRoutes.js` with proper REST conventions:
  - `GET /api/v1/events` - List all events
  - `POST /api/v1/events` - Create new event
  - `GET /api/v1/events/:id` - Get specific event
  - `PUT /api/v1/events/:id` - Update event
  - `DELETE /api/v1/events/:id` - Delete event
  - `GET /api/v1/events/stats` - Get statistics

### Step 3: Enhanced Data Model
- Extended `Event.js` model with:
  - Filtering capabilities (status, location, search, capacity)
  - Pagination support with page/limit parameters
  - CRUD operations with proper data validation
  - Statistics calculation methods

### Step 4: Controller Implementation
- Built `eventController.js` with professional REST practices:
  - Proper HTTP status codes (200, 201, 204, 400, 404, 422, 500)
  - Input validation integration
  - Error handling with try-catch blocks
  - Standardized response formatting

### Step 5: Validation Service
- Created `validationService.js` for comprehensive validation:
  - Required field validation
  - Data type checking
  - Length and range validation
  - Date validation (future dates only)
  - ID format validation

### Step 6: Standardized API Responses
- Implemented `apiResponse.js` utility for consistent responses:
  - Success responses with data
  - Error responses with messages
  - Validation error formatting
  - Paginated response structure

### Step 7: API Documentation
- Added Swagger/OpenAPI documentation in `swagger.js`
- Interactive documentation available at `/api-docs`
- Complete endpoint specifications with parameters and responses

### Step 8: Comprehensive Testing
- Created `test-rest-api.js` with full test coverage:
  - CRUD operation testing
  - Pagination and filtering tests
  - Validation error testing
  - 404 error handling
  - Statistics endpoint testing

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api/v1
```

### Events Resource
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/events` | Retrieve all events (with pagination & filtering) |
| `GET` | `/events/:id` | Retrieve a specific event by ID |
| `POST` | `/events` | Create a new event |
| `PUT` | `/events/:id` | Update an existing event |
| `DELETE` | `/events/:id` | Remove an event |
| `GET` | `/events/stats` | Get event statistics |

### Query Parameters (GET /events)
- **Pagination**: `?page=1&limit=10`
- **Filtering**: `?status=upcoming&location=Sfax&search=workshop&minCapacity=20`

### Request/Response Examples

**Create Event (POST /api/v1/events):**
```json
{
  "title": "JavaScript Workshop",
  "date": "2026-07-15T10:00:00Z",
  "location": "Sfax",
  "capacity": 30,
  "description": "Learn modern JavaScript"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "JavaScript Workshop",
    "date": "2026-07-15T10:00:00Z",
    "location": "Sfax",
    "capacity": 30,
    "attendees": 0,
    "status": "upcoming",
    "description": "Learn modern JavaScript",
    "createdAt": "2026-04-17T...",
    "updatedAt": "2026-04-17T..."
  },
  "message": "Event created successfully",
  "timestamp": "2026-04-17T..."
}
```

## 🧪 Testing

To run the comprehensive REST API test suite:

```bash
# Ensure server is running, then:
node test-rest-api.js
```

The test suite covers:
- ✅ GET all events with pagination
- ✅ Filtering by status, location, search
- ✅ POST create event with validation
- ✅ GET single event by ID
- ✅ PUT update event
- ✅ Validation error handling
- ✅ 404 not found responses
- ✅ DELETE operations
- ✅ Statistics endpoint

## 📖 API Documentation

Interactive Swagger documentation is available at:
```
http://localhost:3000/api-docs
```

## 🔍 Key REST API Concepts Learned

1. **RESTful Design**: Proper use of HTTP methods and status codes
2. **API Versioning**: Managing API evolution with version prefixes
3. **Resource Naming**: Consistent, hierarchical endpoint naming
4. **HTTP Status Codes**: Appropriate codes for different scenarios
5. **Content Negotiation**: JSON request/response handling
6. **Filtering & Pagination**: Efficient data retrieval patterns
7. **Input Validation**: Server-side validation with detailed errors
8. **Error Handling**: Consistent error response format
9. **API Documentation**: Maintaining up-to-date documentation
10. **Testing Strategies**: Comprehensive API testing approaches

## 📝 License

This project is licensed under the MIT License - see the `package.json` file for details.

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

## � Step-by-Step Lab Implementation

### Step 1: Project Setup & API Versioning
- Updated `server.js` to include API versioning (`/api/v1/`)
- Added Swagger documentation integration
- Configured middleware for JSON parsing, logging, and timing

### Step 2: RESTful Route Design
- Created `eventRoutes.js` with proper REST conventions:
  - `GET /api/v1/events` - List all events
  - `POST /api/v1/events` - Create new event
  - `GET /api/v1/events/:id` - Get specific event
  - `PUT /api/v1/events/:id` - Update event
  - `DELETE /api/v1/events/:id` - Delete event
  - `GET /api/v1/events/stats` - Get statistics

### Step 3: Enhanced Data Model
- Extended `Event.js` model with:
  - Filtering capabilities (status, location, search, capacity)
  - Pagination support with page/limit parameters
  - CRUD operations with proper data validation
  - Statistics calculation methods

### Step 4: Controller Implementation
- Built `eventController.js` with professional REST practices:
  - Proper HTTP status codes (200, 201, 204, 400, 404, 422, 500)
  - Input validation integration
  - Error handling with try-catch blocks
  - Standardized response formatting

### Step 5: Validation Service
- Created `validationService.js` for comprehensive validation:
  - Required field validation
  - Data type checking
  - Length and range validation
  - Date validation (future dates only)
  - ID format validation

### Step 6: Standardized API Responses
- Implemented `apiResponse.js` utility for consistent responses:
  - Success responses with data
  - Error responses with messages
  - Validation error formatting
  - Paginated response structure

### Step 7: API Documentation
- Added Swagger/OpenAPI documentation in `swagger.js`
- Interactive documentation available at `/api-docs`
- Complete endpoint specifications with parameters and responses

### Step 8: Comprehensive Testing
- Created `test-rest-api.js` with full test coverage:
  - CRUD operation testing
  - Pagination and filtering tests
  - Validation error testing
  - 404 error handling
  - Statistics endpoint testing

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api/v1
```

### Events Resource
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/events` | Retrieve all events (with pagination & filtering) |
| `GET` | `/events/:id` | Retrieve a specific event by ID |
| `POST` | `/events` | Create a new event |
| `PUT` | `/events/:id` | Update an existing event |
| `DELETE` | `/events/:id` | Remove an event |
| `GET` | `/events/stats` | Get event statistics |

### Query Parameters (GET /events)
- **Pagination**: `?page=1&limit=10`
- **Filtering**: `?status=upcoming&location=Sfax&search=workshop&minCapacity=20`

### Request/Response Examples

**Create Event (POST /api/v1/events):**
```json
{
  "title": "JavaScript Workshop",
  "date": "2026-07-15T10:00:00Z",
  "location": "Sfax",
  "capacity": 30,
  "description": "Learn modern JavaScript"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": 3,
    "title": "JavaScript Workshop",
    "date": "2026-07-15T10:00:00Z",
    "location": "Sfax",
    "capacity": 30,
    "attendees": 0,
    "status": "upcoming",
    "description": "Learn modern JavaScript",
    "createdAt": "2026-04-17T...",
    "updatedAt": "2026-04-17T..."
  },
  "message": "Event created successfully",
  "timestamp": "2026-04-17T..."
}
```

## 🧪 Testing

To run the comprehensive REST API test suite:

```bash
# Ensure server is running, then:
node test-rest-api.js
```

The test suite covers:
- ✅ GET all events with pagination
- ✅ Filtering by status, location, search
- ✅ POST create event with validation
- ✅ GET single event by ID
- ✅ PUT update event
- ✅ Validation error handling
- ✅ 404 not found responses
- ✅ DELETE operations
- ✅ Statistics endpoint

## 📖 API Documentation

Interactive Swagger documentation is available at:
```
http://localhost:3000/api-docs
```

## 🔍 Key REST API Concepts Learned

1. **RESTful Design**: Proper use of HTTP methods and status codes
2. **API Versioning**: Managing API evolution with version prefixes
3. **Resource Naming**: Consistent, hierarchical endpoint naming
4. **HTTP Status Codes**: Appropriate codes for different scenarios
5. **Content Negotiation**: JSON request/response handling
6. **Filtering & Pagination**: Efficient data retrieval patterns
7. **Input Validation**: Server-side validation with detailed errors
8. **Error Handling**: Consistent error response format
9. **API Documentation**: Maintaining up-to-date documentation
10. **Testing Strategies**: Comprehensive API testing approaches

## 📝 License

This project is licensed under the MIT License - see the `package.json` file for details.
