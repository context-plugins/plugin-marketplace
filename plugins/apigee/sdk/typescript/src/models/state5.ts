import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the canary evaluation. */
export const State5 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
} as const;
export type State5 = (typeof State5)[keyof typeof State5] | (string & {});

export const state5Schema: EnumSchema<State5> = s.enumOf<State5>(State5);
