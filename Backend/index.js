import express from "express";
import dontenv from "dotenv";
import { ConnectDB } from "./DB/db.js";
import router from "./Routes/authRoutes.js";
const app = express();
dontenv.config();

ConnectDB();
app.use(express.json());
app.use("/api/auth", router);

app.listen(process.env.PORT, () => {
  console.log(`Server Is Runniing On ${process.env.PORT}`);
});
