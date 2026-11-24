import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the new product to use for the convert positions */
export const NewProduct = {
  I: "I",
  D: "D",
  Co: "CO",
  Oco: "OCO",
  Mtf: "MTF",
} as const;
export type NewProduct = (typeof NewProduct)[keyof typeof NewProduct] | (string & {});

export const newProductSchema: EnumSchema<NewProduct> = s.enumOf<NewProduct>(NewProduct);
