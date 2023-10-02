import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import dotenv from "dotenv";
import { syncDB } from "./sequelize.js";

// Load the environment variables
dotenv.config();

// Create the app
const app = express();

// Disable X-Powered-By header
app.disable('x-powered-by');

//Add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Pass the app to the routes
routes(app);

// sync the database
syncDB();

export default app;
