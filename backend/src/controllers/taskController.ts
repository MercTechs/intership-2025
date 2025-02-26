import { db } from "../db/drizzle";
import { tasks } from "../db/schema";
import { eq } from "drizzle-orm";
import { Request, Response } from "express";

export const getTasks = async (_: Request, res: Response) => {
  const allTasks = await db.select().from(tasks);
  res.json(allTasks);
};

