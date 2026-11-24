import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { enrichedRecordSchema, type EnrichedRecord } from "./enriched-record.js";
import { statusSchema, type Status } from "./status.js";

export type EnrichmentResult = {
  status?: Status;
  externalId?: string;
  data?: EnrichedRecord;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enrichmentResultSchema: Schema<EnrichmentResult> = s.object<EnrichmentResult>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    externalId: s.optional(s.string()),
    data: s.optional(s.lazy(() => enrichedRecordSchema)),
    _keysMap: {
      externalId: "external_id",
    },
  },
  { additionalProperties: s.json() },
);
