import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Default value for message severity. Will be overwritten by value of __severity if set. Defaults
 * to notice.
 */
export const Severity1 = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
} as const;
export type Severity1 = (typeof Severity1)[keyof typeof Severity1] | (number & {});

export const severity1Schema: EnumSchema<Severity1> = s.enumOf<Severity1>(Severity1);
