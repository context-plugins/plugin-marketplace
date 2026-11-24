import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The state of a Channel. */
export const State = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Pending: "PENDING",
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
