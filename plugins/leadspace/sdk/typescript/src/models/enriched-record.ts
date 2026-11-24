import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enrichedCompanySchema, type EnrichedCompany } from "./enriched-company.js";
import { enrichedPersonSchema, type EnrichedPerson } from "./enriched-person.js";
import { enrichmentStatusSchema, type EnrichmentStatus } from "./enrichment-status.js";
import { profileScoreSchema, type ProfileScore } from "./profile-score.js";

export type EnrichedRecord = {
  person?: EnrichedPerson;
  company?: EnrichedCompany;
  enrichmentStatus?: EnrichmentStatus;
  cdiMatched?: string;
  totalScores?: ProfileScore[];
  maxPositiveTotalScoreProfiles?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichedRecordSchema: Schema<EnrichedRecord> = s.object<EnrichedRecord>(
  {
    person: s.optional(s.lazy(() => enrichedPersonSchema)),
    company: s.optional(s.lazy(() => enrichedCompanySchema)),
    enrichmentStatus: s.optional(s.lazy(() => enrichmentStatusSchema)),
    cdiMatched: s.optional(s.string()),
    totalScores: s.optional(s.array(s.lazy(() => profileScoreSchema))),
    maxPositiveTotalScoreProfiles: s.optional(s.array(s.string())),
    _keysMap: {
      enrichmentStatus: "enrichment_status",
      cdiMatched: "cdi_matched",
      totalScores: "total_scores",
      maxPositiveTotalScoreProfiles: "max_positive_total_score_profiles",
    },
  },
  { additionalProperties: s.json() },
);
