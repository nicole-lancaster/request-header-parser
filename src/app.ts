import express from "express";
import cors from "cors";
import { getBasicHtml, getResponseHeader } from "./app.controllers";
export const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static("public"));
app.get("/", getBasicHtml);
app.get("/api/whoami", getResponseHeader);
