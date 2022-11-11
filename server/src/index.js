import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { notFound } from './middlewares/not-found.js';
import { errorHandler } from './middlewares/error.js';
import VideoScraper from './services/video-scraper.js';

dotenv.config();

const app = express();

const videoScraper = new VideoScraper();

app.use(morgan('tiny'));
app.use(cors());

app.get('/videos', async (req, res) => {
	const videos = await videoScraper.getVideos();
	res.json(videos);
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}.`);
});
