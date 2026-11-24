import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BuyingType1 = {
  Auction: "AUCTION",
  Reserved: "RESERVED",
} as const;
export type BuyingType1 = (typeof BuyingType1)[keyof typeof BuyingType1] | (string & {});

export const buyingType1Schema: EnumSchema<BuyingType1> = s.enumOf<BuyingType1>(BuyingType1);
