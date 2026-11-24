import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The state of the build. */
export const State2 = {
  InProgress: "IN_PROGRESS",
  Successful: "SUCCESSFUL",
  Cancelled: "CANCELLED",
  Failed: "FAILED",
  Error: "ERROR",
  TimedOut: "TIMED_OUT",
  Unknown: "UNKNOWN",
} as const;
export type State2 = (typeof State2)[keyof typeof State2] | (string & {});

export const state2Schema: EnumSchema<State2> = s.enumOf<State2>(State2);
