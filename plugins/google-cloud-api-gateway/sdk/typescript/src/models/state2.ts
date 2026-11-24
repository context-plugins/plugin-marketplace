import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the Gateway. */
export const State2 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Failed: "FAILED",
  Deleting: "DELETING",
  Updating: "UPDATING",
} as const;
export type State2 = (typeof State2)[keyof typeof State2] | (string & {});

export const state2Schema: EnumSchema<State2> = s.enumOf<State2>(State2);
