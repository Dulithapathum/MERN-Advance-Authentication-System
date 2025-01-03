import express from "express";
import dontenv from "dotenv";
import { ConnectDB } from "./DB/db.js";
const app = express();
dontenv.config();

ConnectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server Is Runniing On ${process.env.PORT}`);
});
