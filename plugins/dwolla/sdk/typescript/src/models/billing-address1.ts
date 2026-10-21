import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The billing address associated with the card */
export type BillingAddress1 = {
  /** First line of the street address. Must be 50 characters or less. */
  address1: string;
  /** Second line of the street address (optional). Must be 100 characters or less. */
  address2?: string;
  /** Third line of the street address (optional). Must be 100 characters or less. */
  address3?: string;
  /** City name. Must be 50 characters or less. */
  city: string;
  /** Two-letter state, province, or region code. */
  stateProvinceRegion: string;
  /** Two-letter country code (ISO 3166-1 alpha-2) */
  country: string;
  /** Postal code or ZIP code */
  postalCode: string;
};

export const billingAddress1Schema: Schema<BillingAddress1> = s.object<BillingAddress1>({
  address1: s.string(),
  address2: s.optional(s.string()),
  address3: s.optional(s.string()),
  city: s.string(),
  stateProvinceRegion: s.string(),
  country: s.string(),
  postalCode: s.string(),
});
