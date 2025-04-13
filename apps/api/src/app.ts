import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/error.middleware.js';
import notificationRoutes from './routes/notifications.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/notifications', notificationRoutes);

app.use(errorHandler);
