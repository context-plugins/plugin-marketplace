import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the approval request */
export const Status = {
  Pending: "pending",
  Completed: "completed",
  Failed: "failed",
  Scheduled: "scheduled",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
