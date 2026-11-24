import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current execution state of the job */
export const State = {
  Pending: "Pending",
  Running: "Running",
  Stopping: "Stopping",
  Terminating: "Terminating",
  Faulted: "Faulted",
  Successful: "Successful",
  Stopped: "Stopped",
  Suspended: "Suspended",
  Resumed: "Resumed",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
