import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { task1Schema, type Task1 } from "./task1.js";

/** Task implementation details */
export type Task = Task1 | Task1[];

export const taskSchema: Schema<Task> = s.of<Task>(
  s.union([s.lazy(() => task1Schema), s.array(s.lazy(() => task1Schema))]),
);
