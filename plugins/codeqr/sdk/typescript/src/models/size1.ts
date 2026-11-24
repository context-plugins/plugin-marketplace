import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Font size preset for the frame label. `s` = 60 viewBox units, `m` = 89.1 (default), `l` = 120,
 * `xl` = 150. Larger sizes grow the frame bar vertically to fit. Extremely long text auto-shrinks
 * to keep within 4 lines (floor 48).
 */
export const Size1 = {
  S: "s",
  M: "m",
  L: "l",
  Xl: "xl",
} as const;
export type Size1 = (typeof Size1)[keyof typeof Size1] | (string & {});

export const size1Schema: EnumSchema<Size1> = s.enumOf<Size1>(Size1);
