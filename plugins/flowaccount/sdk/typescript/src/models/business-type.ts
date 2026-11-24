import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = SellingProducts 3 = SellingServices 5 = SellingBoth 7 = Custom */
export const BusinessType = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
} as const;
export type BusinessType = (typeof BusinessType)[keyof typeof BusinessType] | (number & {});

export const businessTypeSchema: EnumSchema<BusinessType> = s.enumOf<BusinessType>(BusinessType);
