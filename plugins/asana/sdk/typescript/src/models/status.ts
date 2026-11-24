import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of this job. The value is one of: `not_started`, `in_progress`, `succeeded`,
 * or `failed`.
 */
export const Status = {
  NotStarted: "not_started",
  InProgress: "in_progress",
  Succeeded: "succeeded",
  Failed: "failed",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
