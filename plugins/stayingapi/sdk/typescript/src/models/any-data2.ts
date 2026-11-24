import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { offerInternalSchema, offerSchema, type Offer } from "./offer.js";
import { sourceSchema, type Source } from "./source.js";
import { medianInternalSchema, medianSchema, type Median } from "./unions/median.js";
import { minInternalSchema, minSchema, type Min } from "./unions/min.js";

/** Endpoint-specific data payload. */
export type AnyData2 = {
  property: string;
  checkIn: string;
  checkOut: string;
  currency: string;
  /**
   * Cheapest offer IN `currency`. Offers quoted in another currency are excluded — they are not
   * comparable.
   */
  min: Min;
  /** Median offer IN `currency`, same exclusion as `min`. */
  median: Median;
  offers: Offer[];
  /**
   * How the comparison was produced. Absent = google-aggregator (one Google Hotels leg).
   * 'direct_fanout' = one real price call per listing id you supplied.
   */
  source?: Source;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const anyData2Properties: s.Shape<AnyData2> = {
  property: s.string(),
  checkIn: s.string(),
  checkOut: s.string(),
  currency: s.string(),
  min: minInternalSchema,
  median: medianInternalSchema,
  offers: s.array(s.lazy(() => offerInternalSchema)),
  source: s.optional(s.lazy(() => sourceSchema)),
};

export const anyData2InternalSchema: Schema<AnyData2> = s.object<AnyData2>(anyData2Properties, {
  additionalProperties: s.json(),
});

export const anyData2Schema: Schema<AnyData2> = s.lazySchema(() =>
  s.object<AnyData2>(
    {
      ...anyData2Properties,
      property: s.string().check(s.minLength(1)),
      checkIn: s.string().check(s.pattern("^\\d{4}-\\d{2}-\\d{2}$")),
      checkOut: s.string().check(s.pattern("^\\d{4}-\\d{2}-\\d{2}$")),
      currency: s.string().check(s.pattern("^[A-Z]{3}$")),
      min: minSchema,
      median: medianSchema,
      offers: s.array(s.lazy(() => offerSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
