// PROFESSIONAL REST ROUTES 
import express from "express"; 
import EventController from "../controllers/eventController.js"; 
const router = express.Router(); 
// CRUD Operations 
router.get("/", EventController.getAllEvents); 
router.post("/", EventController.createEvent); 
router.get("/stats", EventController.getStats); 
router.get("/:id", EventController.getEventById); 
router.put("/:id", EventController.updateEvent); 
router.delete("/:id", EventController.deleteEvent); 
export default router;

/** 
 * 
 * @openapi 
 * /api/v1/events: 
 *   get: 
 *     summary: Get all events 
 *     parameters: 
 *       - in: query 
 *         name: page 
 *         schema: 
 *           type: integer 
 *       - in: query 
 *         name: limit 
 *         schema: 
 *           type: integer 
 *       - in: query 
 *         name: status 
 *         schema: 
 *           type: string 
 *     responses: 
 *       200: 
 *         description: List of events 
 *   post: 
 *     summary: Create new event 
 *     requestBody: 
 *       required: true 
 *       content: 
 *         application/json: 
 *           schema: 
 *             type: object 
 *             properties: 
 *                 title: 
 *                 type: string 
 *               date: 
 *                 type: string 
 *               location: 
 *                 type: string 
 *               capacity: 
 *                 type: integer 
 *     responses: 
 *       201: 
 *         description: Event created successfully 
 */