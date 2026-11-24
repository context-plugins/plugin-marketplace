import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsError = {
  /** An explanation of the failure. */
  error: string;
  /** Optional validation or error details. The shape depends on the failure. */
  details?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsErrorSchema: Schema<AnalyticsError> = s.object<AnalyticsError>(
  {
    error: s.string(),
    details: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
