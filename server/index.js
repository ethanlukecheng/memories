import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();

// Logging and body-parsing (Parsing for Images)
app.use(morgan('dev'));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
// Cross-origin resource sharing) Permits loading of foreign resources
app.use(cors());

// Connect DB (http://www.mongodb.com/cloud/atlas)
