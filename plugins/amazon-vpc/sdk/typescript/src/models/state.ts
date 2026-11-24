import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of the attachment */
export const State = {
  Attaching: "attaching",
  Attached: "attached",
  Detaching: "detaching",
  Detached: "detached",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
