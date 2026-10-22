import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of an async task */
export const TaskStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus] | (string & {});

export const taskStatusSchema: EnumSchema<TaskStatus> = s.enumOf<TaskStatus>(TaskStatus);
