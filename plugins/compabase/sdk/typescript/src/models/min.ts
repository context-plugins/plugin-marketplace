import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Min = {
  _0: 0,
  _100000: 100000,
  _1000000: 1000000,
  _5000000: 5000000,
  _10000000: 10000000,
} as const;
export type Min = (typeof Min)[keyof typeof Min] | (number & {});

export const minSchema: EnumSchema<Min> = s.enumOf<Min>(Min);
