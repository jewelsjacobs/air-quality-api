import express from "express";
import config from "./config/index";
import Logger from "./lib/logger";
import * as libs from "./lib";

async function startServer() {
	const app: express.Application = express();
	await libs.default({ serverApp: app });

	app && app.listen(config.port, () => {
		Logger.info(`
            ⚡️--------------------------------------------------⚡️
            ⚡️| Running Node Server for ${process.env.NODE_ENV}
            ⚡️| Version: ${process.env.npm_package_version}
            ⚡️| Ready now on port: ${config.port}
            ⚡️--------------------------------------------------⚡️
        `);
	});
}

startServer();
