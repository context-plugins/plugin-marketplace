import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { backPriceSchema, type BackPrice } from "./unions/back-price.js";
import { layPriceSchema, type LayPrice } from "./unions/lay-price.js";
import { priceSchema, type Price } from "./unions/price.js";

/**
 * A bookmaker quote is `{name, price}`; a venue quoting a lay side is `{name, back_price,
 * lay_price, available}` (`available` left out under `includeLiquidity=false`). No commission is
 * applied.
 */
export type RawOutcome = {
  name: string;
  price?: Price | null;
  backPrice?: BackPrice | null;
  layPrice?: LayPrice | null;
  available?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rawOutcomeSchema: Schema<RawOutcome> = s.object<RawOutcome>(
  {
    name: s.string(),
    price: s.optionalNullable(s.lazy(() => priceSchema)),
    backPrice: s.optionalNullable(s.lazy(() => backPriceSchema)),
    layPrice: s.optionalNullable(s.lazy(() => layPriceSchema)),
    available: s.optionalNullable(s.float64()),
    _keysMap: {
      backPrice: "back_price",
      layPrice: "lay_price",
    },
  },
  { additionalProperties: s.json() },
);
