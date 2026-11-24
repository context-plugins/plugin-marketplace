import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of product */
export const ProductType = {
  Agent: "agent",
  Product: "product",
  PrepaidCreditBundle: "prepaidCreditBundle",
} as const;
export type ProductType = (typeof ProductType)[keyof typeof ProductType] | (string & {});

export const productTypeSchema: EnumSchema<ProductType> = s.enumOf<ProductType>(ProductType);
