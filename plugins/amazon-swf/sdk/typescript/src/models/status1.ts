import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The close status that must match the close status of an execution for it to meet the criteria of
 * this filter.
 */
export const Status1 = {
  Completed: "COMPLETED",
  Failed: "FAILED",
  Canceled: "CANCELED",
  Terminated: "TERMINATED",
  ContinuedAsNew: "CONTINUED_AS_NEW",
  TimedOut: "TIMED_OUT",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
