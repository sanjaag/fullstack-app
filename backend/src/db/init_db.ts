import { Pool } from 'pg';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres', // Connect to default postgres database first
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432'),
});

async function initializeDatabase() {
    const client = await pool.connect();
    try {
        // Create database if it doesn't exist
        const result = await client.query(`
            SELECT 1 FROM pg_database WHERE datname = '${process.env.DB_NAME}'
        `);

        if (result.rowCount === 0) {
            await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);
        }

        // Close connection to postgres database
        await client.release();

        // Create new pool connection to the target database
        const newPool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT || '5432'),
        });

        const newClient = await newPool.connect();
        try {
            // Read and execute schema.sql
            const schemaPath = path.join(__dirname, 'schema.sql');
            const schema = fs.readFileSync(schemaPath, 'utf8');
            await newClient.query(schema);
            console.log('Database schema created successfully');
        } finally {
            await newClient.release();
            await newPool.end();
        }
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    } finally {
        await pool.end();
    }
}

// Run the initialization
initializeDatabase()
    .then(() => {
        console.log('Database initialization completed');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Database initialization failed:', error);
        process.exit(1);
    }); 