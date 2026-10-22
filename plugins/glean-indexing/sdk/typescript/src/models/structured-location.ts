import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Detailed location with information about country, state, city etc. */
export type StructuredLocation = {
  /** Desk number. */
  deskLocation?: string;
  /** Location's timezone, e.g. UTC, PST. */
  timezone?: string;
  /** Office address or name. */
  address?: string;
  /** Name of the city. */
  city?: string;
  /** State code. */
  state?: string;
  /** Region information, e.g. NORAM, APAC. */
  region?: string;
  /** ZIP Code for the address. */
  zipCode?: string;
  /** Country name. */
  country?: string;
  /** Alpha-2 or Alpha-3 ISO 3166 country code, e.g. US or USA. */
  countryCode?: string;
};

export const structuredLocationSchema: Schema<StructuredLocation> = s.object<StructuredLocation>({
  deskLocation: s.optional(s.string()),
  timezone: s.optional(s.string()),
  address: s.optional(s.string()),
  city: s.optional(s.string()),
  state: s.optional(s.string()),
  region: s.optional(s.string()),
  zipCode: s.optional(s.string()),
  country: s.optional(s.string()),
  countryCode: s.optional(s.string()),
});
