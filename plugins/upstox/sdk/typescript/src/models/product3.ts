import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Signifies if the order was either Intraday, Delivery or MTF */
export const Product3 = {
  I: "I",
  D: "D",
  Mtf: "MTF",
} as const;
export type Product3 = (typeof Product3)[keyof typeof Product3] | (string & {});

export const product3Schema: EnumSchema<Product3> = s.enumOf<Product3>(Product3);
