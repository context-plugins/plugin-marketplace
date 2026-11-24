import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the backup. */
export const State8 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  InProgress: "IN_PROGRESS",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type State8 = (typeof State8)[keyof typeof State8] | (string & {});

export const state8Schema: EnumSchema<State8> = s.enumOf<State8>(State8);
