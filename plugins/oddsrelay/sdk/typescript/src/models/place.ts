import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { priceSchema, type Price } from "./unions/price.js";

export type Place = {
  exchange: string;
  price: Price | null;
  /** Money available at that lay price. */
  available: number | null;
  /** `lay.place` only: the place market's places. */
  places?: number | null;
  link: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const placeSchema: Schema<Place> = s.object<Place>(
  {
    exchange: s.string(),
    price: s.nullable(s.lazy(() => priceSchema)),
    available: s.nullable(s.float64()),
    places: s.optionalNullable(s.int()),
    link: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
