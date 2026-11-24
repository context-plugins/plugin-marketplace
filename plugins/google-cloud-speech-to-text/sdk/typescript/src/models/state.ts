import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The CustomClass lifecycle state. This field is not used. */
export const State = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Active: "ACTIVE",
  Deleted: "DELETED",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
