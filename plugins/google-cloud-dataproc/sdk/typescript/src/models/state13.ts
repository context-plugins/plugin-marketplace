import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the federation. */
export const State13 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Updating: "UPDATING",
  Deleting: "DELETING",
  Error: "ERROR",
} as const;
export type State13 = (typeof State13)[keyof typeof State13] | (string & {});

export const state13Schema: EnumSchema<State13> = s.enumOf<State13>(State13);
