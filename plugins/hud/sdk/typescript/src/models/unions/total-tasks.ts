import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TotalTasks = number;

export const totalTasksSchema: Schema<TotalTasks> = s.of<TotalTasks>(s.union([s.int()]));
