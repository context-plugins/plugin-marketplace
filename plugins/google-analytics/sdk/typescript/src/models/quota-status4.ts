import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Standard Analytics Properties and cloud project pairs can have up to 10 server errors per hour;
 * Analytics 360 Properties and cloud project pairs can have up to 50 server errors per hour.
 */
export type QuotaStatus4 = {
  /** Quota remaining after this request. */
  remaining?: number;
  /** Quota consumed by this request. */
  consumed?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const quotaStatus4Schema: Schema<QuotaStatus4> = s.object<QuotaStatus4>(
  {
    remaining: s.optional(s.int()),
    consumed: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
