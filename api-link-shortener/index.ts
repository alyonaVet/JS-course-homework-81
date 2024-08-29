import express from 'express';
import mongoose from 'mongoose';
import linksRouter from "./routers/links";
import cors from "cors";
import {corsOptions} from "./config";

const app = express();
const port = 8000;

app.use(cors(corsOptions));
app.use(express.json());
app.use('/links', linksRouter);

const run = async () => {
    await mongoose.connect('mongodb://localhost/link-shortener');

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

run().catch(console.error);
