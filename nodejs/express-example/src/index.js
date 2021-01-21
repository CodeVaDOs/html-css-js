import express from 'express';
import config from './config';

/**
 * @desc Function to start server
 **/
export const startServer = async () => {
	const app = express();

	app.listen(config.port, err => {
		if (err) {
			process.exit(1);
			return;
		}

		app.get('/', (request, response, next) => {
			try {
				response
					.status(201)
					.json({
						status: true,
						message: 'You are the best programmer I have ever seen!!!'
					});
			} catch (e) {
				next(e);
			}
		});

		console.log(`################################################
 🛡Server listening on port: ${config.port} 
################################################`);

	});
};


startServer();