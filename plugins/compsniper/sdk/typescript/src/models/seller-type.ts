import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SellerType = {
  Private: "private",
  Business: "business",
} as const;
export type SellerType = (typeof SellerType)[keyof typeof SellerType] | (string & {});

export const sellerTypeSchema: EnumSchema<SellerType> = s.enumOf<SellerType>(SellerType);
