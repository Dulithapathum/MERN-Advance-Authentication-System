import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dontenv from "dotenv";
import { ConnectDB } from "./DB/db.js";
import router from "./Routes/authRoutes.js";

const app = express();
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
dontenv.config();

ConnectDB();
app.use(express.json());
app.use("/api/auth", router);

app.listen(process.env.PORT, () => {
  console.log(`Server Is Runniing On ${process.env.PORT}`);
});
