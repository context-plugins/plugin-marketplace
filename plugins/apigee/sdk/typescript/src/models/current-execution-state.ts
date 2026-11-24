import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the execution. */
export const CurrentExecutionState = {
  CurrentExecutionStateUnspecified: "CURRENT_EXECUTION_STATE_UNSPECIFIED",
  Running: "RUNNING",
  NotRunning: "NOT_RUNNING",
} as const;
export type CurrentExecutionState =
  | (typeof CurrentExecutionState)[keyof typeof CurrentExecutionState]
  | (string & {});

export const currentExecutionStateSchema: EnumSchema<CurrentExecutionState> =
  s.enumOf<CurrentExecutionState>(CurrentExecutionState);
