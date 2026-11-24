import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductCreateType = {
  Agent: "agent",
  Product: "product",
  PrepaidCreditBundle: "prepaidCreditBundle",
} as const;
export type ProductCreateType = (typeof ProductCreateType)[keyof typeof ProductCreateType] | (string & {});

export const productCreateTypeSchema: EnumSchema<ProductCreateType> =
  s.enumOf<ProductCreateType>(ProductCreateType);
