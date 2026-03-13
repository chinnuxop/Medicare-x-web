//Entry point for the backend server.
import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import { clerkMiddleware } from '@clerk/express';
import { connectDB } from './config/db.js';
import doctorRouter from './routes/doctorRouter.js';
import serviceRouter from "./routes/serviceRouter.js";
import appointmentRouter from "./routes/appointmentRouter.js";
import serviceAppointmentRouter from "./routes/serviceAppointmentRouter.js";




const app = express();
const port = 4000;

const allowedOrigin = [
    "http://localhost:5173",
    "http://localhost:5174"
];

//Midddlewares
app.use(cors(
    {
        origin: function (origin,callback){
            if(!origin) return callback (null,true);
            if(allowedOrigin.includes(origin)){
                return callback (null,true)
            }
            return callback(new Error("Not allowed by CORS"))
        },
        credentials: true,
        methods: ["GET","POST","PUT","DELETE","OPTIONS"],
        allowedHeader: ["Content-Type","Authorization"]
    }
));
app.use(clerkMiddleware());
app.use(express.json({ limit:"20mb"}));
app.use(express.urlencoded({ limit:"20mb", extended: true }))


//DB
connectDB();


//Routes
app.use("/api/docotors", doctorRouter);
app.use("/api/services", serviceRouter);
app.use("/api/appointments" , appointmentRouter)
app.use("/api/service-appointment" ,serviceAppointmentRouter);


app.get('/',(req,res)=>{
    res.send("API IS WORKING...")
    })
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`);
})