import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1ParallelAiTasksApi = {
  Queued: "queued",
  ActionRequired: "action_required",
  Running: "running",
  Completed: "completed",
  Failed: "failed",
  Cancelling: "cancelling",
  Cancelled: "cancelled",
} as const;
export type Status1ParallelAiTasksApi =
  | (typeof Status1ParallelAiTasksApi)[keyof typeof Status1ParallelAiTasksApi]
  | (string & {});

export const status1ParallelAiTasksApiSchema: EnumSchema<Status1ParallelAiTasksApi> =
  s.enumOf<Status1ParallelAiTasksApi>(Status1ParallelAiTasksApi);
