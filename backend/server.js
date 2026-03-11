//Entry point for the backend server.
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { clerkMiddleware } from '@clerk/express';
import { connectDB } from './config/db.js';
import doctorRouter from './routes/doctorRouter.js';
import serviceRouter from "./routes/serviceRouter.js";
<<<<<<< HEAD
=======
import appointmentRouter from "./routes/appointmentRouter.js"
>>>>>>> 3ae97fb (add CRUD)

const app = express();
const port = 4000;

//Midddlewares
app.use(cors());
app.use(clerkMiddleware());
app.use(express.json({ limit:"20mb"}));
app.use(express.urlencoded({ limit:"20mb", extended: true }))


//DB
connectDB();


//Routes
app.use("/api/docotors", doctorRouter);
app.use("/api/services", serviceRouter);
<<<<<<< HEAD
=======
app.use("/api/appointments" , appointmentRouter)
>>>>>>> 3ae97fb (add CRUD)

app.get('/',(req,res)=>{
    res.send("API IS WORKING...")
    })
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})