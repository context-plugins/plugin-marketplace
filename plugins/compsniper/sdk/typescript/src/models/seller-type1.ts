import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Labeled seller classification on EU marketplaces. */
export const SellerType1 = {
  Private: "private",
  Business: "business",
} as const;
export type SellerType1 = (typeof SellerType1)[keyof typeof SellerType1] | (string & {});

export const sellerType1Schema: EnumSchema<SellerType1> = s.enumOf<SellerType1>(SellerType1);
