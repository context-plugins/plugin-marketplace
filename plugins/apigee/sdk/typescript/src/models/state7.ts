import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current state of the rate plan (draft or published). */
export const State7 = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Draft: "DRAFT",
  Published: "PUBLISHED",
} as const;
export type State7 = (typeof State7)[keyof typeof State7] | (string & {});

export const state7Schema: EnumSchema<State7> = s.enumOf<State7>(State7);
