import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";
import {
  createTransaction,
  getTransaction,
  getTransactionById,
  updateTransaction,
} from "../controllers/transaction.controller";

const router = Router();

router.post("/checkout", upload.single("image"), createTransaction);
router.get("/", authenticate, getTransaction);
router.get("/:id", getTransactionById);
router.put("/:id", authenticate, upload.none(), updateTransaction);

export default router;
