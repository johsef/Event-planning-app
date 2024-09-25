import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import dotenv from "dotenv";
import messageRouter from './router/messageRouter.js';
import cors from 'cors';

const app = express();

// Environment variables configuration
dotenv.config({path: "./config/.env"});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Api creation 
app.use("/api/v1/message", messageRouter);

// Database connnection
dbConnection();


export default app;