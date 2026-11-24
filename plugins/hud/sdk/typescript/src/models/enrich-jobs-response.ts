import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobEnrichmentDataSchema, type JobEnrichmentData } from "./job-enrichment-data.js";

export type EnrichJobsResponse = {
  enrichments?: Record<string, JobEnrichmentData>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichJobsResponseSchema: Schema<EnrichJobsResponse> = s.object<EnrichJobsResponse>(
  {
    enrichments: s.optional(
      s.record(
        s.string(),
        s.lazy(() => jobEnrichmentDataSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
