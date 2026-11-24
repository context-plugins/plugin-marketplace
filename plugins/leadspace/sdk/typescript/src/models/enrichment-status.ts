import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EnrichmentStatus = {
  NotEnriched: "Not Enriched",
  CompanyEnriched: "Company Enriched",
  PersonEnriched: "Person Enriched",
  PersonCompanyEnriched: "Person & Company Enriched",
} as const;
export type EnrichmentStatus = (typeof EnrichmentStatus)[keyof typeof EnrichmentStatus] | (string & {});

export const enrichmentStatusSchema: EnumSchema<EnrichmentStatus> =
  s.enumOf<EnrichmentStatus>(EnrichmentStatus);
