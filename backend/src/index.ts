import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database configuration
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

// Basic health check route
app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

// Example route
app.get('/api/example', async (_req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({ timestamp: result.rows[0].now });
    } catch (err) {
        console.error('Error executing query', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 