import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The currency of the dispute. It's always equal to the currency of the payment. */
export const Currency1 = {
  Aed: "AED",
  Sar: "SAR",
  Kwd: "KWD",
} as const;
export type Currency1 = (typeof Currency1)[keyof typeof Currency1] | (string & {});

export const currency1Schema: EnumSchema<Currency1> = s.enumOf<Currency1>(Currency1);
