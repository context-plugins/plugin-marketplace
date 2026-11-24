import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Datum1 = {
  /** Common Elements id for the matched association. */
  organizationId?: string;
  /** Name of the matched association. */
  associationName?: string;
  /** The indexed parcel address this query matched, for your own audit trail. */
  matchedAddress?: string;
  /** Location on the matched record. */
  zip5?: string;
  /** Location on the matched record. */
  state?: string;
  /** Which parcel source produced the link (internal provenance, not stable API surface). */
  sourceTable?: string;
  /**
   * "exact" is a normalized address match. "building" means your address included a unit and the
   * indexed parcel is the building it sits in — the common shape for a condo, where our source data
   * is building-level.
   */
  matchConfidence?: Record<string, unknown>;
  /**
   * Units in the association, where known and above our confidence floor. Null does not mean zero —
   * it means we do not have a trustworthy count for this one yet.
   */
  unitCount?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1Schema: Schema<Datum1> = s.object<Datum1>(
  {
    organizationId: s.optional(s.string()),
    associationName: s.optional(s.string()),
    matchedAddress: s.optional(s.string()),
    zip5: s.optional(s.string()),
    state: s.optional(s.string()),
    sourceTable: s.optional(s.string()),
    matchConfidence: s.optional(s.record(s.string(), s.unknown())),
    unitCount: s.optionalNullable(s.float64()),
    _keysMap: {
      organizationId: "organization_id",
      associationName: "association_name",
      matchedAddress: "matched_address",
      sourceTable: "source_table",
      matchConfidence: "match_confidence",
      unitCount: "unit_count",
    },
  },
  { additionalProperties: s.json() },
);
