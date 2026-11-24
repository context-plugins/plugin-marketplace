import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The cluster's state. */
export const State2 = {
  Unknown: "UNKNOWN",
  Creating: "CREATING",
  Running: "RUNNING",
  Error: "ERROR",
  ErrorDueToUpdate: "ERROR_DUE_TO_UPDATE",
  Deleting: "DELETING",
  Updating: "UPDATING",
  Stopping: "STOPPING",
  Stopped: "STOPPED",
  Starting: "STARTING",
  Repairing: "REPAIRING",
  Scheduled: "SCHEDULED",
} as const;
export type State2 = (typeof State2)[keyof typeof State2] | (string & {});

export const state2Schema: EnumSchema<State2> = s.enumOf<State2>(State2);
