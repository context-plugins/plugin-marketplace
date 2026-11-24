import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. A state of the session. */
export const State5 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Terminating: "TERMINATING",
  Terminated: "TERMINATED",
  Failed: "FAILED",
} as const;
export type State5 = (typeof State5)[keyof typeof State5] | (string & {});

export const state5Schema: EnumSchema<State5> = s.enumOf<State5>(State5);
