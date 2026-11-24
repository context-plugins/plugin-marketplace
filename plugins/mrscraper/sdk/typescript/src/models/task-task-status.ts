import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskTaskStatus = {
  Pending: "PENDING",
  Processing: "PROCESSING",
  Completed: "COMPLETED",
  Failed: "FAILED",
} as const;
export type TaskTaskStatus = (typeof TaskTaskStatus)[keyof typeof TaskTaskStatus] | (string & {});

export const taskTaskStatusSchema: EnumSchema<TaskTaskStatus> = s.enumOf<TaskTaskStatus>(TaskTaskStatus);
