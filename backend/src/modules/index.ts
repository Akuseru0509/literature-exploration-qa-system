import { Router } from "express";
import { sendSuccess } from "../common/http/response.js";
import healthRoutes from "./health/health.routes.js";

const router = Router();

router.get("/", (_req, res) => {
  return sendSuccess(res, "backend Express API is running", {
    service: "backend",
    framework: "Express",
    health: "/health"
  });
});

router.use("/health", healthRoutes);

export default router;
