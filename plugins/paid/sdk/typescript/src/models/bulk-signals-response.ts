import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BulkSignalsResponse = {
  ingested: number;
  duplicates: number;
  failed: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkSignalsResponseSchema: Schema<BulkSignalsResponse> = s.object<BulkSignalsResponse>(
  {
    ingested: s.int(),
    duplicates: s.int(),
    failed: s.int(),
  },
  { additionalProperties: s.json() },
);
