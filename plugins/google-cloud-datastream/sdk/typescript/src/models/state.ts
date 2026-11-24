import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. Backfill job state. */
export const State = {
  StateUnspecified: "STATE_UNSPECIFIED",
  NotStarted: "NOT_STARTED",
  Pending: "PENDING",
  Active: "ACTIVE",
  Stopped: "STOPPED",
  Failed: "FAILED",
  Completed: "COMPLETED",
  Unsupported: "UNSUPPORTED",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
