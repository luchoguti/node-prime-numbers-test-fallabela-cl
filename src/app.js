import express from "express";
import morgan from "morgan";
import { dirname, join} from 'path'
import {fileURLToPath} from 'url'

import PrimeNumbersRoutes from "./routes/prime_numbers.routes.js";

// Initialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// routes
app.use(PrimeNumbersRoutes);

// static files
app.use(express.static(join(__dirname, "public")));

export default app;
