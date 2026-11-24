import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always INR for transfers. */
export const Currency1 = {
  Inr: "INR",
} as const;
export type Currency1 = (typeof Currency1)[keyof typeof Currency1] | (string & {});

export const currency1Schema: EnumSchema<Currency1> = s.enumOf<Currency1>(Currency1);
