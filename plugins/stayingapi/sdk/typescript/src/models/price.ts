import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { feesInternalSchema, feesSchema, type Fees } from "./fees.js";
import { occupancyInternalSchema, occupancySchema, type Occupancy } from "./occupancy.js";
import { platformSchema, type Platform } from "./platform.js";

export type Price = {
  platform: Platform;
  listingId: string;
  currency: string;
  nightlyPrice: number;
  totalPrice: number;
  fees: Fees;
  nights: number;
  occupancy: Occupancy;
  source: string;
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const priceProperties: s.Shape<Price> = {
  platform: platformSchema,
  listingId: s.string(),
  currency: s.string(),
  nightlyPrice: s.float64(),
  totalPrice: s.float64(),
  fees: feesInternalSchema,
  nights: s.int(),
  occupancy: occupancyInternalSchema,
  source: s.string(),
  url: s.string(),
};

export const priceInternalSchema: Schema<Price> = s.object<Price>(priceProperties, {
  additionalProperties: s.json(),
});

export const priceSchema: Schema<Price> = s.lazySchema(() =>
  s.object<Price>(
    {
      ...priceProperties,
      listingId: s.string().check(s.minLength(1)),
      currency: s.string().check(s.pattern("^[A-Z]{3}$")),
      nightlyPrice: s.float64().check(s.gte(0)),
      totalPrice: s.float64().check(s.gte(0)),
      fees: feesSchema,
      nights: s.int().check(s.gt(0), s.lte(9007199254740991)),
      occupancy: occupancySchema,
      source: s.string().check(s.minLength(1)),
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
