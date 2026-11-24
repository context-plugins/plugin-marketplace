import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fees1InternalSchema, fees1Schema, type Fees1 } from "./fees1.js";
import { platform2Schema, type Platform2 } from "./platform2.js";

export type Offer = {
  /**
   * The seller. Google mode: the OTA name Google reported. Direct mode: the platform you supplied.
   */
  ota: string;
  totalPrice: number;
  currency: string;
  url: string;
  /** DIRECT MODE ONLY. The platform this leg was priced on. */
  platform?: Platform2;
  /** DIRECT MODE ONLY. The platform-native listing id you supplied for this leg. */
  listingId?: string;
  /** DIRECT MODE ONLY. Per-night price for the requested stay. */
  nightlyPrice?: number;
  /**
   * DIRECT MODE ONLY, and BEST-EFFORT: fee coverage differs per platform. Airbnb reports cleaning,
   * service and taxes; Booking.com reports taxes only; Vrbo and Google report none (all null).
   * Compare on totalPrice — it is present and comparable on every platform. Never assume a null fee
   * means the platform does not charge it; it means we could not read it.
   */
  fees?: Fees1;
  /** DIRECT MODE ONLY. Nights priced. */
  nights?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const offerProperties: s.Shape<Offer> = {
  ota: s.string(),
  totalPrice: s.float64(),
  currency: s.string(),
  url: s.string(),
  platform: s.optional(s.lazy(() => platform2Schema)),
  listingId: s.optional(s.string()),
  nightlyPrice: s.optional(s.float64()),
  fees: s.optional(s.lazy(() => fees1InternalSchema)),
  nights: s.optional(s.int()),
};

export const offerInternalSchema: Schema<Offer> = s.object<Offer>(offerProperties, {
  additionalProperties: s.json(),
});

export const offerSchema: Schema<Offer> = s.lazySchema(() =>
  s.object<Offer>(
    {
      ...offerProperties,
      ota: s.string().check(s.minLength(1)),
      totalPrice: s.float64().check(s.gte(0)),
      currency: s.string().check(s.pattern("^[A-Z]{3}$")),
      url: s.string().check(s.url()),
      listingId: s.optional(s.string().check(s.minLength(1))),
      nightlyPrice: s.optional(s.float64().check(s.gte(0))),
      fees: s.optional(s.lazy(() => fees1Schema)),
      nights: s.optional(s.int().check(s.gt(0), s.lte(9007199254740991))),
    },
    { additionalProperties: s.json() },
  ),
);
