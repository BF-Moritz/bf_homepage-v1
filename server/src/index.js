import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { notFound } from './middlewares/not-found.js';
import { errorHandler } from './middlewares/error.js';

dotenv.config();

const app = express();

app.use(morgan('tiny'));
app.use(cors());

app.get('/videos', (req, res) => {
	res.json([]);
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});
