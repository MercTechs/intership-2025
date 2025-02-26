import { db } from "../db/drizzle";
import { columns } from "../db/schema";
import { Request, Response } from "express";

export const getColumns = async (_: Request, res: Response) => {
  const allColumns = await db.select().from(columns);
  res.json(allColumns);
};

