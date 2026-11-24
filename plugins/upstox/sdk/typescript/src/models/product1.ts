import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shows if the order was either Intraday, Delivery, CoverOrder or OneCancelsOther */
export const Product1 = {
  I: "I",
  D: "D",
  Co: "CO",
  Oco: "OCO",
  Mtf: "MTF",
} as const;
export type Product1 = (typeof Product1)[keyof typeof Product1] | (string & {});

export const product1Schema: EnumSchema<Product1> = s.enumOf<Product1>(Product1);
