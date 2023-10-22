import express from "express";
import TicketController from "../controllers/ticket.controller.js";

const router = express.Router();

router.post("/", TicketController.createTicket);
router.patch("/in-service/start", TicketController.startInServiceTicket);
router.patch("/in-service/close", TicketController.closeInServiceTicket);
router.get("/in-service", TicketController.inServiceTickets);
router.get("/open", TicketController.openTickets);
router.get("/closed", TicketController.closeTickets);

export default router;
