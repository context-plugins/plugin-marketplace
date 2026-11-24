import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the restore. */
export const State10 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Cancelled: "CANCELLED",
} as const;
export type State10 = (typeof State10)[keyof typeof State10] | (string & {});

export const state10Schema: EnumSchema<State10> = s.enumOf<State10>(State10);
