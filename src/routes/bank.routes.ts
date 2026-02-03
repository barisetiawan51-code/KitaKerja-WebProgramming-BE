import { Router } from "express";
import {
  createBank,
  getBanks,
  updateBanks,
  deleteBanks,
} from "../controllers/bank.controller";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authenticate, createBank);
router.get("/", getBanks);
router.put("/:id", authenticate, updateBanks);
router.delete("/:id", authenticate, deleteBanks);

export default router;
