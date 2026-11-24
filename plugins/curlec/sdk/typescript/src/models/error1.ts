import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error1 = {
  /** Error code. Examples: BAD_REQUEST_ERROR, GATEWAY_ERROR, SERVER_ERROR. */
  code?: string;
  description?: string;
  /** Where the error originated (e.g. business, gateway). */
  source?: string;
  step?: string;
  /**
   * Machine-readable reason. Examples: insufficient_funds, invalid_expiry_date, declined_by_bank.
   */
  reason?: string;
  metadata?: Record<string, unknown>;
  field?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error1Schema: Schema<Error1> = s.object<Error1>(
  {
    code: s.optional(s.string()),
    description: s.optional(s.string()),
    source: s.optional(s.string()),
    step: s.optional(s.string()),
    reason: s.optional(s.string()),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    field: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
