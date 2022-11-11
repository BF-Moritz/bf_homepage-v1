import axios from 'axios';

export default class VideoScraper {
	constructor() {
		this.lastScrape = null;
		this.videos = new Map();
		this.scrape();
	}

	async getVideos() {
		console.log(Date.now() - this.lastScrape);
		if (Date.now() - this.lastScrape > 1000 * 60 * 60) {
			await this.scrape();
		}
		return Array.from(this.videos.values());
	}

	async scrape() {
		console.log('scraping');
		let url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
		url.searchParams.set('key', process.env.GOOGLE_API_KEY);
		url.searchParams.set('maxResults', 5);
		url.searchParams.set('playlistId', 'UUG2Ih-T2blZgsM1DKf01d3A');
		url.searchParams.set('part', 'snippet');
		let hasNext = true;
		do {
			let { data } = await axios.get(url.toString());
			data.items.forEach((video) => {
				this.videos.set(video.id, video);
			});
			url.searchParams.set('pageToken', data.nextPageToken);
			hasNext = data.nextPageToken !== undefined;
		} while (hasNext);
		this.lastScrape = Date.now();
	}
}
