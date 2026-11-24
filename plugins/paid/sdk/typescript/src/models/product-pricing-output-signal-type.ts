import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProductPricingOutputSignalType = {
  Activity: "activity",
  Outcome: "outcome",
} as const;
export type ProductPricingOutputSignalType =
  | (typeof ProductPricingOutputSignalType)[keyof typeof ProductPricingOutputSignalType]
  | (string & {});

export const productPricingOutputSignalTypeSchema: EnumSchema<ProductPricingOutputSignalType> =
  s.enumOf<ProductPricingOutputSignalType>(ProductPricingOutputSignalType);
