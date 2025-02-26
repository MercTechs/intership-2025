import express from "express";
import { getColumns } from "../controllers/columnController";

const router = express.Router();

router.get("/", getColumns);


export default router;
