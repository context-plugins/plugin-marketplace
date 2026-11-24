import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CompletedTasks = number;

export const completedTasksSchema: Schema<CompletedTasks> = s.of<CompletedTasks>(s.union([s.int()]));
