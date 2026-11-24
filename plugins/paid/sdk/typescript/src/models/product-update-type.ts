import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductUpdateType = {
  Agent: "agent",
  Product: "product",
  PrepaidCreditBundle: "prepaidCreditBundle",
} as const;
export type ProductUpdateType = (typeof ProductUpdateType)[keyof typeof ProductUpdateType] | (string & {});

export const productUpdateTypeSchema: EnumSchema<ProductUpdateType> =
  s.enumOf<ProductUpdateType>(ProductUpdateType);
