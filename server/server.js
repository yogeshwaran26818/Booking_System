import express from 'express';
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'


const app=express();
const port=3000;

await connectDB()

//middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

app.get('/',(req,res)=>res.send('Server is Live!'))
app.use("/api/inngest", serve({ client: inngest, functions }));
app.listen(port,()=>console.log(`server listening at http://localhost:${port}`));
