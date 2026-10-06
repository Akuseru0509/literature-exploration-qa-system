import { app } from "./app.js";
import { appConfig } from "./config/app.config.js";
import { logger } from "./common/utils/logger.js";

app.listen(appConfig.port, () => {
  logger.info(`[backend] Express API running on http://localhost:${appConfig.port}`);
  logger.info(`[backend] Health check: http://localhost:${appConfig.port}/health`);
});
