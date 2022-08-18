import express, { Application } from 'express';
import cors from 'cors';

import { userRoutes } from '../routes';

class Server {
	private app: Application;
	private port: string;
	private apiRoutes = {
		users: '/api/users',
	};

	constructor() {
		//? Properties
		this.app = express();
		this.port = process.env.PORT || '8080';

		//* Initial Methods
		this.middleware();
		this.routes();
	}

	connectDb() {}

	middleware() {
		//! CORS
		this.app.use(cors());
		//! Body Parser
		this.app.use(express.json());
		//! Static Files
		this.app.use(express.static('public'));
	}

	routes() {
		this.app.use(this.apiRoutes.users, userRoutes);
	}

	start() {
		this.app.listen(this.port, () => {
			console.log(`Server running on port ${this.port}`);
		});
	}
}

export default Server;
