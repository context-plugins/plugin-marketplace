import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { batchRowSchema, type BatchRow } from "./batch-row.js";

export type BatchRequest = {
  /** Up to 500 rows, answered in order. */
  rows: BatchRow[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchRequestSchema: Schema<BatchRequest> = s.object<BatchRequest>(
  {
    rows: s.array(s.lazy(() => batchRowSchema)),
  },
  { additionalProperties: s.json() },
);
