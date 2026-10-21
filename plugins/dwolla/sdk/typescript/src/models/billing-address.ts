import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The billing address associated with the card */
export type BillingAddress = {
  /** First line of the street address */
  address1?: string;
  /** Second line of the street address (optional) */
  address2?: string;
  /** Third line of the street address (optional) */
  address3?: string;
  /** City name */
  city?: string;
  /** Two-letter state, province, or region code */
  stateProvinceRegion?: string;
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  country?: string;
  /** Postal code or ZIP code */
  postalCode?: string;
};

export const billingAddressSchema: Schema<BillingAddress> = s.object<BillingAddress>({
  address1: s.optional(s.string()),
  address2: s.optional(s.string()),
  address3: s.optional(s.string()),
  city: s.optional(s.string()),
  stateProvinceRegion: s.optional(s.string()),
  country: s.optional(s.string()),
  postalCode: s.optional(s.string()),
});
