import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PriceSource = {
  EbayDiscounted: "ebay_discounted",
  Retail: "retail",
} as const;
export type PriceSource = (typeof PriceSource)[keyof typeof PriceSource] | (string & {});

export const priceSourceSchema: EnumSchema<PriceSource> = s.enumOf<PriceSource>(PriceSource);
