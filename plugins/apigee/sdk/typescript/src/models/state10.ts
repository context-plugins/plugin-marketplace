import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. State of the nat address. */
export const State10 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Reserved: "RESERVED",
  Active: "ACTIVE",
  Deleting: "DELETING",
} as const;
export type State10 = (typeof State10)[keyof typeof State10] | (string & {});

export const state10Schema: EnumSchema<State10> = s.enumOf<State10>(State10);
