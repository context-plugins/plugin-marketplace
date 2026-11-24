import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the backup. */
export const State12 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Deleting: "DELETING",
  Active: "ACTIVE",
  Failed: "FAILED",
  Restoring: "RESTORING",
} as const;
export type State12 = (typeof State12)[keyof typeof State12] | (string & {});

export const state12Schema: EnumSchema<State12> = s.enumOf<State12>(State12);
