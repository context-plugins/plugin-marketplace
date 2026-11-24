import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. State of the environment group. Values other than ACTIVE means the resource is not
 * ready to use.
 */
export const State = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Active: "ACTIVE",
  Deleting: "DELETING",
  Updating: "UPDATING",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
