import express from "express";
import { clerkMiddleware, requireAuth } from "@clerk/express";

import {
  cancelAppointment,
  confirmPayment,
  createAppointment,
  getAppointments,
  getAppointmentsByDoctor,
  getAppointmentsByPatient,
  getStats,
  getRegisteredUserCount,
  updateAppointment
} from "../controllers/appointmentController.js";

const appointmentRouter = express.Router();

// Public routes
appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/confirm", confirmPayment);
appointmentRouter.get("/stats/summary", getStats);

// Authenticated routes
appointmentRouter.post("/", clerkMiddleware(), requireAuth(), createAppointment);
appointmentRouter.get("/me",clerkMiddleware(),requireAuth(),getAppointmentsByPatient);

appointmentRouter.get("/doctor/:doctorId", getAppointmentsByDoctor);

appointmentRouter.post("/:id/cancel", cancelAppointment);
appointmentRouter.get("/patients/count", getRegisteredUserCount);
appointmentRouter.put("/:id", updateAppointment);

export default appointmentRouter;