import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BuyingFormat = {
  All: "all",
  Auction: "auction",
  BuyItNow: "buyItNow",
  AcceptsOffers: "acceptsOffers",
} as const;
export type BuyingFormat = (typeof BuyingFormat)[keyof typeof BuyingFormat] | (string & {});

export const buyingFormatSchema: EnumSchema<BuyingFormat> = s.enumOf<BuyingFormat>(BuyingFormat);
