import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of an async generation task.
 * * `pending`: accepted and queued, not yet started.
 * * `processing`: generation is in progress.
 * * `completed`: generation finished; `result` is populated.
 * * `failed`: generation did not complete successfully.
 */
export const TaskStatus = {
  Pending: "pending",
  Processing: "processing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus] | (string & {});

export const taskStatusSchema: EnumSchema<TaskStatus> = s.enumOf<TaskStatus>(TaskStatus);
