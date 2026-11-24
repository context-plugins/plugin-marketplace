import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the backfill (or dry run). */
export const State15 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Pending: "PENDING",
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type State15 = (typeof State15)[keyof typeof State15] | (string & {});

export const state15Schema: EnumSchema<State15> = s.enumOf<State15>(State15);
