import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the execution. */
export const Status4 = {
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  TimedOut: "TIMED_OUT",
} as const;
export type Status4 = (typeof Status4)[keyof typeof Status4] | (string & {});

export const status4Schema: EnumSchema<Status4> = s.enumOf<Status4>(Status4);
