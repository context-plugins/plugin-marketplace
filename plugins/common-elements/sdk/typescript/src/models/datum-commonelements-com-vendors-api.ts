import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatumCommonelementsComVendorsApi = {
  /** Vendor organization id. */
  id?: string;
  /** Vendor legal name. */
  name?: string;
  /** Vendor category subtype. */
  subtype?: string | null;
  /** Vendor location. */
  city?: string | null;
  /** Vendor location. */
  state?: string | null;
  /** Vendor location. */
  zip?: string | null;
  /** Vendor website. */
  website?: string | null;
  /** States the vendor reports serving. */
  serviceStates?: string[];
  /** Slug for the public vendor directory page. */
  directorySlug?: string | null;
  /** Platform review volume and average rating. Results are sorted by rating, highest first. */
  reviewCount?: number | null;
  /** Platform review volume and average rating. Results are sorted by rating, highest first. */
  reviewAvgRating?: number | null;
  /** Vendor-authored description. */
  description?: string | null;
  /** Vendor-self-asserted service scope. */
  serviceCategories?: string[];
  /** Vendor-self-asserted service scope. */
  serviceCounties?: string[];
  /**
   * Vendor-self-asserted credentials. Not independently verified at this endpoint — see
   * /v1/vendors/{id} for the verified trust profile.
   */
  licenseNumber?: string | null;
  /**
   * Vendor-self-asserted credentials. Not independently verified at this endpoint — see
   * /v1/vendors/{id} for the verified trust profile.
   */
  insuranceCarrier?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCommonelementsComVendorsApiSchema: Schema<DatumCommonelementsComVendorsApi> =
  s.object<DatumCommonelementsComVendorsApi>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      subtype: s.optionalNullable(s.string()),
      city: s.optionalNullable(s.string()),
      state: s.optionalNullable(s.string()),
      zip: s.optionalNullable(s.string()),
      website: s.optionalNullable(s.string()),
      serviceStates: s.optional(s.array(s.string())),
      directorySlug: s.optionalNullable(s.string()),
      reviewCount: s.optionalNullable(s.float64()),
      reviewAvgRating: s.optionalNullable(s.float64()),
      description: s.optionalNullable(s.string()),
      serviceCategories: s.optional(s.array(s.string())),
      serviceCounties: s.optional(s.array(s.string())),
      licenseNumber: s.optionalNullable(s.string()),
      insuranceCarrier: s.optionalNullable(s.string()),
      _keysMap: {
        serviceStates: "service_states",
        directorySlug: "directory_slug",
        reviewCount: "review_count",
        reviewAvgRating: "review_avg_rating",
        serviceCategories: "service_categories",
        serviceCounties: "service_counties",
        licenseNumber: "license_number",
        insuranceCarrier: "insurance_carrier",
      },
    },
    { additionalProperties: s.json() },
  );
