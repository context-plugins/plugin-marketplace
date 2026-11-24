import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Auction = {
  Copart: "copart",
  Iaai: "iaai",
} as const;
export type Auction = (typeof Auction)[keyof typeof Auction] | (string & {});

export const auctionSchema: EnumSchema<Auction> = s.enumOf<Auction>(Auction);
