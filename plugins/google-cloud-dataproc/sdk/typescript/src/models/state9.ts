import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the export. */
export const State9 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Cancelled: "CANCELLED",
} as const;
export type State9 = (typeof State9)[keyof typeof State9] | (string & {});

export const state9Schema: EnumSchema<State9> = s.enumOf<State9>(State9);
