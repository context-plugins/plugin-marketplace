import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Buying type of the campaign */
export const BuyingType = {
  Auction: "AUCTION",
  Reserved: "RESERVED",
} as const;
export type BuyingType = (typeof BuyingType)[keyof typeof BuyingType] | (string & {});

export const buyingTypeSchema: EnumSchema<BuyingType> = s.enumOf<BuyingType>(BuyingType);
