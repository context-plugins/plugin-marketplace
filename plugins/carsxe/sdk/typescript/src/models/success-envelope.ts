import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Generic success envelope. Endpoint-specific payload fields appear at the top level alongside
 * these common fields.
 */
export type SuccessEnvelope = {
  success?: boolean;
  /** Echo of the input parameters specified by the query. */
  input?: Record<string, unknown>;
  timestamp?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const successEnvelopeSchema: Schema<SuccessEnvelope> = s.object<SuccessEnvelope>(
  {
    success: s.optional(s.boolean()),
    input: s.optional(s.record(s.string(), s.unknown())),
    timestamp: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
