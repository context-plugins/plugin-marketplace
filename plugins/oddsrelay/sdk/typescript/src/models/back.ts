import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priceSchema, type Price } from "./unions/price.js";

export type Back = {
  /** Venue key (`/v2/bookmakers`). */
  bookmaker: string | null;
  price: Price | null;
  /** The venue's page for this event. */
  link: string | null;
  /** `each-way`, `extra-place`: places paid. */
  places?: number | null;
  /** `each-way`, `extra-place`: the place terms as a fraction. */
  placeFraction?: number | null;
  /**
   * `dutching` only: 8 hex naming the dutch this leg belongs to. Group one market's offers by it
   * and rate a dutch as 100 / sum(1/price).
   */
  dutchId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backSchema: Schema<Back> = s.object<Back>(
  {
    bookmaker: s.nullable(s.string()),
    price: s.nullable(s.lazy(() => priceSchema)),
    link: s.nullable(s.string()),
    places: s.optionalNullable(s.int()),
    placeFraction: s.optionalNullable(s.float64()),
    dutchId: s.optional(s.string()),
    _keysMap: {
      placeFraction: "place_fraction",
      dutchId: "dutch_id",
    },
  },
  { additionalProperties: s.json() },
);
