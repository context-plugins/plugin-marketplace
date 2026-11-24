import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the batch builds to retrieve. Only batch builds that have this status will be
 * retrieved.
 */
export const Status5 = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Fault: "FAULT",
  TimedOut: "TIMED_OUT",
  InProgress: "IN_PROGRESS",
  Stopped: "STOPPED",
} as const;
export type Status5 = (typeof Status5)[keyof typeof Status5] | (string & {});

export const status5Schema: EnumSchema<Status5> = s.enumOf<Status5>(Status5);
