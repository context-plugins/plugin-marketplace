import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The state of the session at this point in the session history. */
export const State1 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Terminating: "TERMINATING",
  Terminated: "TERMINATED",
  Failed: "FAILED",
} as const;
export type State1 = (typeof State1)[keyof typeof State1] | (string & {});

export const state1Schema: EnumSchema<State1> = s.enumOf<State1>(State1);
