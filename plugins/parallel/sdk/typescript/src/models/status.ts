import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the FindAll run. */
export const Status = {
  Queued: "queued",
  ActionRequired: "action_required",
  Running: "running",
  Completed: "completed",
  Failed: "failed",
  Cancelling: "cancelling",
  Cancelled: "cancelled",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
