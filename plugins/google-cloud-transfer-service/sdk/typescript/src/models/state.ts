import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Specifies the state of the AgentPool. */
export const State = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Creating: "CREATING",
  Created: "CREATED",
  Deleting: "DELETING",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
