import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The application state. */
export const State = {
  StateUnspecified: "STATE_UNSPECIFIED",
  New: "NEW",
  NewSaving: "NEW_SAVING",
  Submitted: "SUBMITTED",
  Accepted: "ACCEPTED",
  Running: "RUNNING",
  Finished: "FINISHED",
  Failed: "FAILED",
  Killed: "KILLED",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
