import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Shows if the order was either Intraday, Delivery, CO or OCO */
export const Product4 = {
  I: "I",
  D: "D",
  Co: "CO",
  Oco: "OCO",
  Mtf: "MTF",
} as const;
export type Product4 = (typeof Product4)[keyof typeof Product4] | (string & {});

export const product4Schema: EnumSchema<Product4> = s.enumOf<Product4>(Product4);
