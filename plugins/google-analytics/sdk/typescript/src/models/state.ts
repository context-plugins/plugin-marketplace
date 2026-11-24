import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state for this AudienceExport. */
export const State = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Failed: "FAILED",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
