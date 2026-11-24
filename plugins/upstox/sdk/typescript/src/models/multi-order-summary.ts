import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MultiOrderSummary = {
  /** The total number of order lines present in the payload. */
  total?: number;
  /** The number of order lines that were successfully placed without any errors. */
  success?: number;
  /**
   * The number of order lines that encountered errors during processing, despite their payloads
   * being valid.
   */
  error?: number;
  /**
   * The number of order lines with payload errors, indicating formatting or data validity
   * issues.<br/><br/><b>Note</b>: Orders are processed only if the entire batch is free of
   * payload_error, ensuring error-free transactions.
   */
  payloadError?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiOrderSummarySchema: Schema<MultiOrderSummary> = s.object<MultiOrderSummary>(
  {
    total: s.optional(s.int()),
    success: s.optional(s.int()),
    error: s.optional(s.int()),
    payloadError: s.optional(s.int()),
    _keysMap: {
      payloadError: "payload_error",
    },
  },
  { additionalProperties: s.json() },
);
