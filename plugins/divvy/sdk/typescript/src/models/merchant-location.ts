import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MerchantLocation = {
  /** Merchant city */
  city?: string;
  /** Merchant state or region */
  state?: string;
  /** Merchant zip or postal code */
  postalCode?: string;
  /** Merchant country */
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const merchantLocationSchema: Schema<MerchantLocation> = s.object<MerchantLocation>(
  {
    city: s.optional(s.string()),
    state: s.optional(s.string()),
    postalCode: s.optional(s.string()),
    country: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
