import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchExecutionSummary = {
  /** The total number of order lines present in the payload. */
  total?: number;
  /** The number of order lines that were successfully placed without any errors. */
  success?: number;
  /**
   * The number of order lines that encountered errors during processing, despite their payloads
   * being valid.
   */
  error?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchExecutionSummarySchema: Schema<BatchExecutionSummary> = s.object<BatchExecutionSummary>(
  {
    total: s.optional(s.int()),
    success: s.optional(s.int()),
    error: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
