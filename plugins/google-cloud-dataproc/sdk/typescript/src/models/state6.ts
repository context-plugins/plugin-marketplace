import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The state of the batch at this point in history. */
export const State6 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Pending: "PENDING",
  Running: "RUNNING",
  Cancelling: "CANCELLING",
  Cancelled: "CANCELLED",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type State6 = (typeof State6)[keyof typeof State6] | (string & {});

export const state6Schema: EnumSchema<State6> = s.enumOf<State6>(State6);
