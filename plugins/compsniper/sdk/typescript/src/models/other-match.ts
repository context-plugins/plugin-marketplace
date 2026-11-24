import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type OtherMatch = {
  productId?: number | null;
  name?: string | null;
  productLine?: string | null;
  setName?: string | null;
  number?: string | null;
  rarity?: string | null;
  sealed?: boolean | null;
  marketPrice?: number | null;
  lowestPrice?: number | null;
  lowestPriceWithShipping?: number | null;
  totalListings?: number | null;
  url?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const otherMatchSchema: Schema<OtherMatch> = s.object<OtherMatch>(
  {
    productId: s.optionalNullable(s.int()),
    name: s.optionalNullable(s.string()),
    productLine: s.optionalNullable(s.string()),
    setName: s.optionalNullable(s.string()),
    number: s.optionalNullable(s.string()),
    rarity: s.optionalNullable(s.string()),
    sealed: s.optionalNullable(s.boolean()),
    marketPrice: s.optionalNullable(s.float64()),
    lowestPrice: s.optionalNullable(s.float64()),
    lowestPriceWithShipping: s.optionalNullable(s.float64()),
    totalListings: s.optionalNullable(s.int()),
    url: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
