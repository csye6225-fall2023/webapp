import app from './api/app.js'; // Import the app
import { syncDB } from './api/sequelize.js';
import { logger } from './configs/logger.config.js';

const port = process.env.PORT || 8080; // Set the port

app.listen(port, async () => { // Start the server
    //sync the database
    await syncDB();

    //print the .env to logger
    logger.info(JSON.stringify(process.env, null, 2));
    
    console.log(`Server listening on port ${port}`);
});
