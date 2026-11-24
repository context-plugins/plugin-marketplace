import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Product = {
  I: "I",
  D: "D",
  Co: "CO",
  Oco: "OCO",
  Mtf: "MTF",
} as const;
export type Product = (typeof Product)[keyof typeof Product] | (string & {});

export const productSchema: EnumSchema<Product> = s.enumOf<Product>(Product);
