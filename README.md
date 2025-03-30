# Fullstack Application

A modern fullstack application using React (web), Expo (mobile), Node.js (backend), and PostgreSQL.

## Project Structure

- `frontend/` - React web application
- `mobile/` - Expo mobile application
- `backend/` - Node.js backend API
- `docker-compose.yml` - Docker configuration for all services

## Prerequisites

- Node.js 20.x
- Docker and Docker Compose
- PostgreSQL (if running locally)
- Expo Go app on your mobile device (for mobile development)

## Quick Start with Docker (Recommended)

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fullstack-app
   ```

2. Start all services with Docker:
   ```bash
   docker-compose up --build
   ```

   This will:
   - Build and start the frontend container
   - Build and start the backend container
   - Start the PostgreSQL database
   - Initialize the database schema
   - Start all services in development mode

3. Access the applications:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001
   - PostgreSQL: localhost:5432

## Running Services Individually

### Backend Setup

1. Navigate to backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your database credentials
   ```

4. Initialize the database:
   ```bash
   npm run init-db
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the web application at http://localhost:3000

### Mobile Setup

1. Navigate to mobile directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Expo development server:
   ```bash
   npm start
   ```

4. Scan the QR code with your mobile device:
   - iOS: Use the Camera app
   - Android: Use the Expo Go app

## Development

- Backend API runs on http://localhost:3001
- Frontend web app runs on http://localhost:3000
- Mobile app can be run using Expo Go on your device

## Docker Commands

```bash
# Start all services
docker-compose up --build

# Start in detached mode
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild containers
docker-compose up --build --force-recreate
```

## Database Management

The database is automatically initialized when using Docker. If running locally:

1. Create a PostgreSQL database:
   ```bash
   createdb fullstack_app
   ```

2. Initialize the schema:
   ```bash
   cd backend
   npm run init-db
   ```

## Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT 