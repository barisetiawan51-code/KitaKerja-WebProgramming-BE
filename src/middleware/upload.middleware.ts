import multer from "multer";
import path from "path";
import fs from "fs";

const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (
  req: any,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  const fileTypes = /jpeg|jpg|png|gif|svg/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType =
    fileTypes.test(file.mimetype) ||
    file.mimetype === "image/svg+xml" ||
    file.mimetype === "text/xml" ||
    file.mimetype === "application/octet-stream";

  console.log("Menerima file: ${file.mimetype} | Mimetype: ${file.mimetype}");

  if (extName && mimeType) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed"));
  }
};

export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
