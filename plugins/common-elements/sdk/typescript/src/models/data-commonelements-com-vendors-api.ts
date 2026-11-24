import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataCommonelementsComVendorsApi = {
  /** Vendor identity and location. */
  id?: string | null;
  /** Vendor identity and location. */
  name?: string | null;
  /** Vendor identity and location. */
  subtype?: string | null;
  /** Vendor identity and location. */
  city?: string | null;
  /** Vendor identity and location. */
  state?: string | null;
  /** Vendor identity and location. */
  zip?: string | null;
  /** Vendor identity and location. */
  website?: string | null;
  /** Always "verified" for a row this endpoint returns. */
  verificationStatus?: string;
  /** States the vendor reports serving. */
  serviceStates?: string[];
  /** Platform review summary. */
  reviewCount?: number | null;
  /** Platform review summary. */
  reviewAvgRating?: number | null;
  /** Vendor-self-asserted display fields. */
  description?: string | null;
  /** Vendor-self-asserted display fields. */
  licenseNumber?: string | null;
  /** Vendor-self-asserted display fields. */
  insuranceCarrier?: string | null;
  /** Vendor-self-asserted display fields. */
  teamSize?: string | null;
  /** Vendor-self-asserted display fields. */
  boothTagline?: string | null;
  /** Vendor-self-asserted service scope and credentials. */
  servicesOffered?: string[];
  /** Vendor-self-asserted service scope and credentials. */
  certifications?: string[];
  /** Vendor-self-asserted service scope and credentials. */
  serviceCategories?: string[];
  /** Vendor-self-asserted service scope and credentials. */
  serviceCounties?: string[];
  /**
   * Published offering posts: id, title, body, category_slugs, service_states, service_counties,
   * pinned, published_at.
   */
  serviceOfferings?: Record<string, unknown>[];
  /**
   * Independently-sourced, public-record credential facts (FL workers'-comp status, professional
   * licenses, enforcement count). Null when the vendor has no confirmed public-record match — this
   * is the verified boundary, distinct from the self-asserted fields above.
   */
  trustProfile?: Record<string, unknown> | null;
  /** When the vendor record was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataCommonelementsComVendorsApiSchema: Schema<DataCommonelementsComVendorsApi> =
  s.object<DataCommonelementsComVendorsApi>(
    {
      id: s.optionalNullable(s.string()),
      name: s.optionalNullable(s.string()),
      subtype: s.optionalNullable(s.string()),
      city: s.optionalNullable(s.string()),
      state: s.optionalNullable(s.string()),
      zip: s.optionalNullable(s.string()),
      website: s.optionalNullable(s.string()),
      verificationStatus: s.optional(s.string()),
      serviceStates: s.optional(s.array(s.string())),
      reviewCount: s.optionalNullable(s.float64()),
      reviewAvgRating: s.optionalNullable(s.float64()),
      description: s.optionalNullable(s.string()),
      licenseNumber: s.optionalNullable(s.string()),
      insuranceCarrier: s.optionalNullable(s.string()),
      teamSize: s.optionalNullable(s.string()),
      boothTagline: s.optionalNullable(s.string()),
      servicesOffered: s.optional(s.array(s.string())),
      certifications: s.optional(s.array(s.string())),
      serviceCategories: s.optional(s.array(s.string())),
      serviceCounties: s.optional(s.array(s.string())),
      serviceOfferings: s.optional(s.array(s.record(s.string(), s.unknown()))),
      trustProfile: s.optionalNullable(s.record(s.string(), s.unknown())),
      createdAt: s.optional(s.dateTime()),
      _keysMap: {
        verificationStatus: "verification_status",
        serviceStates: "service_states",
        reviewCount: "review_count",
        reviewAvgRating: "review_avg_rating",
        licenseNumber: "license_number",
        insuranceCarrier: "insurance_carrier",
        teamSize: "team_size",
        boothTagline: "booth_tagline",
        servicesOffered: "services_offered",
        serviceCategories: "service_categories",
        serviceCounties: "service_counties",
        serviceOfferings: "service_offerings",
        trustProfile: "trust_profile",
        createdAt: "created_at",
      },
    },
    { additionalProperties: s.json() },
  );
