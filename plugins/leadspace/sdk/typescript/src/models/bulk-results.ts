import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enrichmentResultSchema, type EnrichmentResult } from "./enrichment-result.js";

export type BulkResults = {
  results?: EnrichmentResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkResultsSchema: Schema<BulkResults> = s.object<BulkResults>(
  {
    results: s.optional(s.array(s.lazy(() => enrichmentResultSchema))),
  },
  { additionalProperties: s.json() },
);
