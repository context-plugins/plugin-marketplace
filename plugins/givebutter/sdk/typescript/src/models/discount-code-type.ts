import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DiscountCodeType = {
  Percentage: "percentage",
  Fixed: "fixed",
} as const;
export type DiscountCodeType = (typeof DiscountCodeType)[keyof typeof DiscountCodeType] | (string & {});

export const discountCodeTypeSchema: EnumSchema<DiscountCodeType> =
  s.enumOf<DiscountCodeType>(DiscountCodeType);
