import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AuctionType = {
  _0: 0,
  _1: 1,
  _2: 2,
} as const;
export type AuctionType = (typeof AuctionType)[keyof typeof AuctionType] | (number & {});

export const auctionTypeSchema: EnumSchema<AuctionType> = s.enumOf<AuctionType>(AuctionType);
