import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. A state message specifying the overall job state. */
export const State4 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Pending: "PENDING",
  SetupDone: "SETUP_DONE",
  Running: "RUNNING",
  CancelPending: "CANCEL_PENDING",
  CancelStarted: "CANCEL_STARTED",
  Cancelled: "CANCELLED",
  Done: "DONE",
  Error: "ERROR",
  AttemptFailure: "ATTEMPT_FAILURE",
} as const;
export type State4 = (typeof State4)[keyof typeof State4] | (string & {});

export const state4Schema: EnumSchema<State4> = s.enumOf<State4>(State4);
