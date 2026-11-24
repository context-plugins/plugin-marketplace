import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const State = {
  Running: "running",
  Scheduled: "scheduled",
  Passed: "passed",
  Failed: "failed",
  Blocked: "blocked",
  Canceled: "canceled",
  Canceling: "canceling",
  Skipped: "skipped",
  NotRun: "not_run",
  Finished: "finished",
} as const;
export type State = (typeof State)[keyof typeof State] | (string & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
