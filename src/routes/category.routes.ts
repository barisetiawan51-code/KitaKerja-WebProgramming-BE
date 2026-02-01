import { Router } from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller";
import { upload } from "../middleware/upload.middleware";
import { authenticate } from "../middleware/auth.middleware";

const router = Router();

router.post("/", authenticate, upload.single("imageUrl"), createCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.put("/:id", authenticate, upload.single("imageUrl"), updateCategory);
router.delete("/:id", authenticate, deleteCategory);

export default router;
