import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error400PaymentsRefund = {
  status?: string;
  errorType?: string;
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error400PaymentsRefundSchema: Schema<Error400PaymentsRefund> = s.object<Error400PaymentsRefund>(
  {
    status: s.optional(s.string()),
    errorType: s.optional(s.string()),
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
