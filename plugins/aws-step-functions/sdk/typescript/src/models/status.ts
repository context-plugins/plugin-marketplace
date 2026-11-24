import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the execution. */
export const Status = {
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  TimedOut: "TIMED_OUT",
  Aborted: "ABORTED",
  PendingRedrive: "PENDING_REDRIVE",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
