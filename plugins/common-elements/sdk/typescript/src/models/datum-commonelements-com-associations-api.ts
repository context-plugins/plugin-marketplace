import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DatumCommonelementsComAssociationsApi = {
  /** Common Elements id for the matched record. */
  id?: string;
  /** Normalized association name. */
  canonicalName?: string;
  /**
   * Trigram similarity against your query, 0 to 1. Rows come back ranked. Parcel hits use 1 (exact)
   * or 0.99 (building) so a client that thresholds on sim still keeps a real address match.
   */
  sim?: number;
  /** How this request was resolved. Address-shaped q never falls through to name matching. */
  resolvedVia?: Record<string, unknown>;
  /** Present when resolved_via is address: the indexed parcel and exact or building. */
  matchedAddress?: string | null;
  /** Present when resolved_via is address: the indexed parcel and exact or building. */
  matchConfidence?: string | null;
  /**
   * Present when resolved_via is address. Units in the association, where known and above our
   * confidence floor; null does not mean zero.
   */
  unitCount?: number | null;
  /** Location on the matched record. */
  county?: string | null;
  /** Location on the matched record. */
  state?: string | null;
  /** State corporate registry id, where known. */
  sunbizCorpId?: string | null;
  /** Registry status on the record. */
  registrationStatus?: string | null;
  /** Registry formation and most recent filing timestamps. */
  registeredAt?: Date | null;
  /** Registry formation and most recent filing timestamps. */
  lastFilingAt?: Date | null;
  /** Management firm of record, where known. */
  camFirmName?: string | null;
  /** License of the management firm of record. */
  camLicenseNumber?: string | null;
  /** License of the management firm of record. */
  camLicenseStatus?: string | null;
  /** Association type on the record. */
  associationType?: string | null;
  /** Whether Florida SB 4-D structural requirements are recorded as applicable. */
  sb4DApplicable?: boolean | null;
  /** Recorded SB 4-D inspection state. */
  sb4DInspectionStatus?: string | null;
  /** Recorded SB 4-D inspection state. */
  sb4DLastInspectionAt?: string | null;
  /** Per-field source attribution for the record. */
  dataProvenance?: Record<string, unknown> | null;
  /** When the record was last refreshed from source. */
  lastRefreshedAt?: Date | null;
  /** Generated plain-language summary, where one exists. */
  aiSummary?: string | null;
  /** Generated plain-language summary, where one exists. */
  aiSummaryGeneratedAt?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datumCommonelementsComAssociationsApiSchema: Schema<DatumCommonelementsComAssociationsApi> =
  s.object<DatumCommonelementsComAssociationsApi>(
    {
      id: s.optional(s.string()),
      canonicalName: s.optional(s.string()),
      sim: s.optional(s.float64()),
      resolvedVia: s.optional(s.record(s.string(), s.unknown())),
      matchedAddress: s.optionalNullable(s.string()),
      matchConfidence: s.optionalNullable(s.string()),
      unitCount: s.optionalNullable(s.float64()),
      county: s.optionalNullable(s.string()),
      state: s.optionalNullable(s.string()),
      sunbizCorpId: s.optionalNullable(s.string()),
      registrationStatus: s.optionalNullable(s.string()),
      registeredAt: s.optionalNullable(s.dateTime()),
      lastFilingAt: s.optionalNullable(s.dateTime()),
      camFirmName: s.optionalNullable(s.string()),
      camLicenseNumber: s.optionalNullable(s.string()),
      camLicenseStatus: s.optionalNullable(s.string()),
      associationType: s.optionalNullable(s.string()),
      sb4DApplicable: s.optionalNullable(s.boolean()),
      sb4DInspectionStatus: s.optionalNullable(s.string()),
      sb4DLastInspectionAt: s.optionalNullable(s.string()),
      dataProvenance: s.optionalNullable(s.record(s.string(), s.unknown())),
      lastRefreshedAt: s.optionalNullable(s.dateTime()),
      aiSummary: s.optionalNullable(s.string()),
      aiSummaryGeneratedAt: s.optionalNullable(s.string()),
      _keysMap: {
        canonicalName: "canonical_name",
        resolvedVia: "resolved_via",
        matchedAddress: "matched_address",
        matchConfidence: "match_confidence",
        unitCount: "unit_count",
        sunbizCorpId: "sunbiz_corp_id",
        registrationStatus: "registration_status",
        registeredAt: "registered_at",
        lastFilingAt: "last_filing_at",
        camFirmName: "cam_firm_name",
        camLicenseNumber: "cam_license_number",
        camLicenseStatus: "cam_license_status",
        associationType: "association_type",
        sb4DApplicable: "sb_4d_applicable",
        sb4DInspectionStatus: "sb_4d_inspection_status",
        sb4DLastInspectionAt: "sb_4d_last_inspection_at",
        dataProvenance: "data_provenance",
        lastRefreshedAt: "last_refreshed_at",
        aiSummary: "ai_summary",
        aiSummaryGeneratedAt: "ai_summary_generated_at",
      },
    },
    { additionalProperties: s.json() },
  );
