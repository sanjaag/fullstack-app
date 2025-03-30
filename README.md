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

## Getting Started

1. Clone the repository
2. Install dependencies for each project:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd frontend
   npm install

   # Mobile
   cd mobile
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in the backend directory
   - Update the environment variables as needed

4. Start the development environment:

   Using Docker:
   ```bash
   docker-compose up
   ```

   Or running services individually:
   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd frontend
   npm run dev

   # Mobile
   cd mobile
   npm start
   ```

## Development

- Backend API runs on http://localhost:3001
- Frontend web app runs on http://localhost:3000
- Mobile app can be run using Expo Go on your device

## Building for Production

1. Build the Docker containers:
   ```bash
   docker-compose build
   ```

2. Start the production environment:
   ```bash
   docker-compose up -d
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