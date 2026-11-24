import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = Service 3 = ProductWithNoStock 5 = ProductWithStock */
export const ProductTypes = {
  _1: 1,
  _3: 3,
  _5: 5,
} as const;
export type ProductTypes = (typeof ProductTypes)[keyof typeof ProductTypes] | (number & {});

export const productTypesSchema: EnumSchema<ProductTypes> = s.enumOf<ProductTypes>(ProductTypes);
