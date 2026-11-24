import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CostIngestResponse = {
  /** Number of records persisted. */
  ingested: number;
  /**
   * Number of records skipped because their `idempotencyKey` matched a previously ingested record.
   */
  duplicates: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const costIngestResponseSchema: Schema<CostIngestResponse> = s.object<CostIngestResponse>(
  {
    ingested: s.int(),
    duplicates: s.int(),
  },
  { additionalProperties: s.json() },
);
