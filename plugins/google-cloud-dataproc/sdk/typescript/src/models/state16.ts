import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The current state of the metadata import. */
export const State16 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Running: "RUNNING",
  Succeeded: "SUCCEEDED",
  Updating: "UPDATING",
  Failed: "FAILED",
} as const;
export type State16 = (typeof State16)[keyof typeof State16] | (string & {});

export const state16Schema: EnumSchema<State16> = s.enumOf<State16>(State16);
