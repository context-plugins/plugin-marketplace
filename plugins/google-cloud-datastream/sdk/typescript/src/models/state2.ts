import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The state of the Private Connection. */
export const State2 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Created: "CREATED",
  Failed: "FAILED",
  Deleting: "DELETING",
  FailedToDelete: "FAILED_TO_DELETE",
} as const;
export type State2 = (typeof State2)[keyof typeof State2] | (string & {});

export const state2Schema: EnumSchema<State2> = s.enumOf<State2>(State2);
