import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the run. */
export const StatusParallelAiTasksApi = {
  Queued: "queued",
  ActionRequired: "action_required",
  Running: "running",
  Completed: "completed",
  Failed: "failed",
  Cancelling: "cancelling",
  Cancelled: "cancelled",
} as const;
export type StatusParallelAiTasksApi =
  | (typeof StatusParallelAiTasksApi)[keyof typeof StatusParallelAiTasksApi]
  | (string & {});

export const statusParallelAiTasksApiSchema: EnumSchema<StatusParallelAiTasksApi> =
  s.enumOf<StatusParallelAiTasksApi>(StatusParallelAiTasksApi);
