import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SellerType = {
  Dealer: "dealer",
  Finance: "finance",
  Insurance: "insurance",
  NonInsurance: "non_insurance",
} as const;
export type SellerType = (typeof SellerType)[keyof typeof SellerType] | (string & {});

export const sellerTypeSchema: EnumSchema<SellerType> = s.enumOf<SellerType>(SellerType);
