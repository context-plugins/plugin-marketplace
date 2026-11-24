import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current state of the pipeline */
export const State = {
  Created: "created",
  Errored: "errored",
  SetupPending: "setup-pending",
  Setup: "setup",
  Pending: "pending",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
