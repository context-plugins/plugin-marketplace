import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** State of the Job */
export const State = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
} as const;
export type State = (typeof State)[keyof typeof State] | (number & {});

export const stateSchema: EnumSchema<State> = s.enumOf<State>(State);
