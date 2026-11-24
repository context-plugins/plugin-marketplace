import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The state of the batch. */
export const State7 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Pending: "PENDING",
  Running: "RUNNING",
  Cancelling: "CANCELLING",
  Cancelled: "CANCELLED",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type State7 = (typeof State7)[keyof typeof State7] | (string & {});

export const state7Schema: EnumSchema<State7> = s.enumOf<State7>(State7);
