import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1 = {
  /** Vendor organization id. */
  id?: string;
  /** Vendor legal name. */
  name?: string;
  /** Vendor subtype. */
  subtype?: string | null;
  /** Vendor location. */
  city?: string | null;
  /** Vendor location. */
  state?: string | null;
  /** Vendor website. */
  website?: string | null;
  /** Whether the vendor org is verified on the platform. */
  verificationStatus?: string | null;
  /** Slug for the public vendor directory page. */
  directorySlug?: string | null;
  /** Platform review volume and average rating. */
  reviewCount?: number | null;
  /** Platform review volume and average rating. */
  reviewAvgRating?: number | null;
  /** "under_contract" or "represented_by". This is the edge type behind the row. */
  relationshipType?: string | null;
  /** Edge status; only active edges are returned. */
  relationshipStatus?: string | null;
  /** Contract window, where recorded. */
  startDate?: string | null;
  /** Contract window, where recorded. */
  endDate?: string | null;
  /** Contract value, where recorded. */
  contractValue?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1Schema: Schema<Data1> = s.object<Data1>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    subtype: s.optionalNullable(s.string()),
    city: s.optionalNullable(s.string()),
    state: s.optionalNullable(s.string()),
    website: s.optionalNullable(s.string()),
    verificationStatus: s.optionalNullable(s.string()),
    directorySlug: s.optionalNullable(s.string()),
    reviewCount: s.optionalNullable(s.float64()),
    reviewAvgRating: s.optionalNullable(s.float64()),
    relationshipType: s.optionalNullable(s.string()),
    relationshipStatus: s.optionalNullable(s.string()),
    startDate: s.optionalNullable(s.dateOnly()),
    endDate: s.optionalNullable(s.dateOnly()),
    contractValue: s.optionalNullable(s.float64()),
    _keysMap: {
      verificationStatus: "verification_status",
      directorySlug: "directory_slug",
      reviewCount: "review_count",
      reviewAvgRating: "review_avg_rating",
      relationshipType: "relationship_type",
      relationshipStatus: "relationship_status",
      startDate: "start_date",
      endDate: "end_date",
      contractValue: "contract_value",
    },
  },
  { additionalProperties: s.json() },
);
